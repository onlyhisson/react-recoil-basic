import { useRecoilValue } from "recoil";

import { withUserImg } from "../../recoil/myApp";

const MyAppAsync = () => {
  const { status, message } = useRecoilValue(withUserImg);
  return (
    <div>
      <div>{status}</div>
      {status === "success" && <img alt="img" src={message} />}
    </div>
  );
};

export default MyAppAsync;
