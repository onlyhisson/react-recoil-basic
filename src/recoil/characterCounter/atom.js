import { atom } from "recoil";
import { TEXT_STATE } from "../types";

const textState = atom({
  key: TEXT_STATE, // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default textState;
