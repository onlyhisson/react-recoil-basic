import { selector } from "recoil";
import axiosDogImgUrl from "../../api/axiosDogImgUrl";
import currentUserIDState from "./";
import { tableOfUsers } from "../../static/users";
import { CURRENT_USER_IMG } from "../types";

// 요청 지연 테스트
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const currentUserImg = selector({
  key: CURRENT_USER_IMG,
  get: async ({ get }) => {
    await wait(3000);

    const response = await axiosDogImgUrl(
      tableOfUsers[get(currentUserIDState)].name
    );

    if (response.error) {
      //ErrorBoundary 에서 캐치
      throw response.error;
    }
    return response;
  },
});

export default currentUserImg;
