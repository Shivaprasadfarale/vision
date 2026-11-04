/**
 * Form binding: live validation with custom messages (data-error-*), consent
 * gate visibility, phone sanitising, submit-button aria-disabled state and
 * submission. Submissions POST JSON to `window.rsApi.url + endpoint` when an
 * API is configured (PUBLIC_FORM_API_URL); otherwise they are handled locally
 * (demo mode) so the full success flow can still be exercised.
 */
import { showToast } from "./toast";
import { showSuccessPopup } from "./success-popup";

type FormOptions = {
  endpoint: string;
  toastPosition?: string;
  successPopup?: HTMLElement | null;
  onSuccess?: ((res: unknown, form: HTMLFormElement) => void) | null;
};

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

declare global {
  interface Window {
    rsApi?: { url?: string; nonce?: string };
  }
}

const lang = () => (document.documentElement.lang || "en").slice(0, 2);

async function submitPayload(endpoint: string, payload: Record<string, unknown>) {
  const api = window.rsApi || {};
  if (!api.url) {
    // Demo mode — no backend configured.
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true, data: { success: true, message: "Thank you, your message has been sent." } };
  }
  const res = await fetch(api.url + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(api.nonce ? { "X-WP-Nonce": api.nonce } : {}) },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

export function bindForm(form: HTMLFormElement | null, { endpoint, toastPosition = "bottom", successPopup = null, onSuccess = null }: FormOptions) {
  if (!form || form.dataset.formBound === "1") return;
  form.dataset.formBound = "1";
  const submit = form.querySelector<HTMLElement>('button[type="submit"], [type="submit"]');
  let busy = false;
  const fields = ([...form.elements] as Field[]).filter(
    (el) => el.willValidate && el.type !== "submit" && el.type !== "button" && el.name !== "website",
  );
  const allValid = () => fields.every((f) => f.validity.valid);
  const consentGate = form.querySelector<HTMLElement>("[data-consent-gate]");
  const textFields = fields.filter((f) => f.type !== "checkbox" && f.type !== "radio");
  const updateGate = () => {
    if (consentGate) consentGate.hidden = !textFields.every((f) => f.validity.valid);
  };
  const messageFor = (f: Field) => {
    const v = f.validity;
    if (v.valid) return "";
    if (v.valueMissing) return f.dataset.errorRequired || f.validationMessage;
    if (v.typeMismatch) return f.dataset.errorType || f.validationMessage;
    if ((v.patternMismatch || v.tooShort || v.tooLong) && f.dataset.errorPattern) return f.dataset.errorPattern;
    return f.validationMessage;
  };
  const errorEl = (f: Field) => {
    const id = f.getAttribute("aria-describedby");
    if (id) {
      const el = document.getElementById(id);
      if (el) return el;
    }
    return f.closest("div, label")?.querySelector<HTMLElement>("[data-field-error]") || null;
  };
  const validate = (f: Field, { show = true } = {}) => {
    const invalid = !f.validity.valid;
    f.setAttribute("aria-invalid", invalid ? "true" : "false");
    const el = errorEl(f);
    if (el) el.textContent = invalid && show ? messageFor(f) : "";
  };
  const resetErrors = () =>
    fields.forEach((f) => {
      f.setAttribute("aria-invalid", "false");
      const el = errorEl(f);
      if (el) el.textContent = "";
    });
  const refresh = () => {
    submit?.setAttribute("aria-disabled", allValid() ? "false" : "true");
    updateGate();
  };

  fields.forEach((f) => {
    const isCheck = f.type === "checkbox" || f.type === "radio";
    if (f.type === "tel")
      f.addEventListener("input", () => {
        const cleaned = f.value.replace(/[^\d+()\s./-]/g, "");
        if (cleaned !== f.value) f.value = cleaned;
      });
    if (isCheck)
      f.addEventListener("change", () => {
        validate(f);
        refresh();
      });
    else {
      f.addEventListener("input", () => {
        if (f.validity.valid) validate(f);
        refresh();
      });
      f.addEventListener("blur", () => {
        validate(f);
        refresh();
      });
    }
  });
  refresh();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (busy) return;
    if (!allValid()) {
      fields.forEach((f) => validate(f));
      const firstInvalid = fields.find((f) => !f.validity.valid);
      firstInvalid?.focus?.();
      refresh();
      return;
    }
    const payload: Record<string, unknown> = { lang: lang() };
    new FormData(form).forEach((v, k) => (payload[k] = v));
    fields.filter((f) => f.type === "checkbox").forEach((f) => (payload[f.name] = (f as HTMLInputElement).checked ? 1 : 0));
    busy = true;
    submit?.setAttribute("aria-disabled", "true");
    form.dataset.submitting = "1";
    try {
      const { ok, data } = await submitPayload(endpoint, payload);
      if (ok && (data as { success?: boolean }).success) {
        if (successPopup) showSuccessPopup(successPopup, { anchor: form });
        else showToast((data as { message?: string }).message || "OK", { type: "success", position: toastPosition });
        onSuccess?.(data, form);
        form.reset();
        resetErrors();
      } else {
        showToast((data as { message?: string }).message || "An error occurred.", { type: "error", position: toastPosition });
      }
    } catch {
      showToast("A network error occurred. Please try again.", { type: "error", position: toastPosition });
    } finally {
      busy = false;
      delete form.dataset.submitting;
      refresh();
    }
  });
}

export function initNewsletterForms() {
  const popup = document.querySelector<HTMLElement>('[data-form-success="newsletter"]');
  document.querySelectorAll<HTMLFormElement>(".footer-ronn__newsletter-form").forEach((form) =>
    bindForm(form, { endpoint: "newsletter", toastPosition: "bottom", successPopup: popup }),
  );
}
