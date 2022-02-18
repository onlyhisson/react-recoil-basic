import axios from "axios";

const URL = "https://dog.ceo/api/breed/@breeds/images/random";

const axiosDogImgUrl = async (name) => {
  const result = { status: "failed", message: "API Error" };
  const url = URL.replace("@breeds", name);
  return await axios
    .get(url)
    .then(function (response) {
      const {
        data: { status, message },
      } = response;
      result.status = status;
      result.message = message;
    })
    .catch(function (error) {
      result.error = error;
      if (error.response) {
        console.log("Error : ", "2XX 이외 상태 코드 응답");
        //console.log(error.response);
      } else if (error.request) {
        console.log("Error : ", "응답이 없음");
        //console.log(error.request);
      } else {
        console.log("Error : ", "요청 설정 문제");
        //console.log("Error", error.message);
      }
      //console.log("Error Config : ", error.config);
    })
    .then(function () {
      return result;
    });
};

export default axiosDogImgUrl;
