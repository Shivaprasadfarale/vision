// Compatibility layer: the ported block modules import these short names from
// the original bundle's main chunk. Each maps to a readable core module.
import "./effects";
import SplitType from "split-type";
import { aboveFoldTimelines } from "./entrance-registry";
import { bindForm } from "./forms";
import { addHeaderEntrance, revealHeaderNow } from "./header";
import { getLenis } from "./lenis";
import { getScrub, useSlinky } from "./scrub";

/** Vite preload helper replacement: just run the dynamic import. */
const preload = (load) => load();

export {
  SplitType as S,
  preload as _,
  aboveFoldTimelines as a,
  bindForm as b,
  addHeaderEntrance as c,
  getLenis as g,
  revealHeaderNow as i,
  getScrub as m,
  revealHeaderNow as r,
  useSlinky as u,
};
