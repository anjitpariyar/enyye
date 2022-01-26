import Right from "./icons/Right";
import { ArrowDiv } from "./styled/Arrow.styled";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <ArrowDiv>
      <div className={className} onClick={onClick}>
        <Right />
      </div>
    </ArrowDiv>
  );
};

export default NextArrow;
