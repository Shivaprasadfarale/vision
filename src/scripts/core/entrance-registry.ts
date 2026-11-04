/**
 * Above-the-fold blocks register their (paused) entrance timeline here so the
 * page entrance can sequence them after the preloader / page transition.
 */
export const aboveFoldTimelines = new WeakMap<Element, gsap.core.Timeline>();
