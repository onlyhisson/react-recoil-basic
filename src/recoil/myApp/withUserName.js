import { selector } from "recoil";
import currentUserIDState from "./atom";
import { CURRENT_USER_NAME } from "../types";
import { tableOfUsers } from "../../static/users";

const currentUserNameState = selector({
  key: CURRENT_USER_NAME,
  get: ({ get }) => {
    return tableOfUsers[get(currentUserIDState)].name;
  },
});

export default currentUserNameState;
