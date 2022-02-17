import axios from "axios";

const URL = "https://dog.ceo/api/breed/@breeds/images/random";
const axiosDogImgUrl = async (name) => {
  const result = { status: "failed", message: "API Error" };
  const url = URL.replace("@breeds", name);
  axios
    .get(url)
    .then(function (response) {
      const {
        data: { status, message },
      } = response;

      console.log(">> status : ", status);
      console.log(">> message : ", message);

      if (status === "error") {
        result.message = message;
      } else {
        result.status = status;
        result.message = message;
      }
    })
    .catch(function (error) {
      console.log(">> error : ", error);
      if (error.message) {
        result.message = error.message;
      }
    })
    .then(function () {
      console.log(">> result : ", result);
      return result;
    });
};

export default axiosDogImgUrl;
