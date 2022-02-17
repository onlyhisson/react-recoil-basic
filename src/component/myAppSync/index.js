import { useSetRecoilState, useRecoilValue } from "recoil";
import currentUserIDState from "../../recoil/myApp";
import { withUserName } from "../../recoil/myApp/";

const MyApp = () => {
  const userName = useRecoilValue(withUserName);
  const setUserId = useSetRecoilState(currentUserIDState);

  const onClcik = ({ target: { value } }) => {
    setUserId(value);
  };

  return (
    <>
      <div>
        <span>name : </span>
        {userName}
      </div>
      <div>
        <button value="1" onClick={onClcik}>
          1
        </button>
        <button value="2" onClick={onClcik}>
          2
        </button>
        <button value="3" onClick={onClcik}>
          3
        </button>
      </div>
    </>
  );
};

export default MyApp;
