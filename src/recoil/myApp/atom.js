import { atom } from "recoil";
import { CURRENT_USER_ID } from "../types";

const currentUserIDState = atom({
  key: CURRENT_USER_ID,
  default: 2,
});

export default currentUserIDState;
