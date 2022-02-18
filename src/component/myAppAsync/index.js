import { useRecoilValue } from "recoil";

import { withUserImg } from "../../recoil/myApp";

const MyAppAsync = () => {
  const { status, message } = useRecoilValue(withUserImg);
  //const status = "success";
  //const message = "https://images.dog.ceo/breeds/beagle/n02088364_14690.jpg";
  return (
    <div>
      <div>{status}</div>
      {status === "success" && <img alt="img" src={message} />}
    </div>
  );
};

export default MyAppAsync;
