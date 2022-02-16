import { useRecoilValue } from "recoil";
import { withCounter } from "../../recoil/characterCounter";

const CharacterCount = () => {
  const count = useRecoilValue(withCounter);

  return <>Character Count: {count}</>;
};

export default CharacterCount;
