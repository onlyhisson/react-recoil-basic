import { selector } from "recoil";
import axiosDogImgUrl from "../../api/axiosDogImgUrl";
import currentUserIDState from "./";
import { tableOfUsers } from "../../static/users";
import { CURRENT_USER_IMG } from "../types";

const currentUserImg = selector({
  key: CURRENT_USER_IMG,
  get: async ({ get }) => {
    const response = await axiosDogImgUrl(
      tableOfUsers[get(currentUserIDState)].name
    );
    return response;
  },
});

export default currentUserImg;
