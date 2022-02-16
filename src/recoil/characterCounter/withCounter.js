import { selector } from "recoil";
import textState from "./atom";
import { CHAR_COUNT_STATE } from "../types";

const charCountState = selector({
  key: CHAR_COUNT_STATE, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export default charCountState;
