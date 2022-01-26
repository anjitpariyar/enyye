import Left from "./icons/Left";
import { ArrowDiv } from "./styled/Arrow.styled";
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <ArrowDiv>
      <div onClick={onClick} className={className && className}>
        <Left />
      </div>
    </ArrowDiv>
  );
};

export default PrevArrow;
