import { Link } from "react-router-dom";
import backArrow from "../../assets/back-arrow.svg";

const ButtonBack = () => {
  return (
    <Link className="button__primary button--back" to="/" >
      <img src={ backArrow } alt="Back arrow" />
      <span>go back</span>
    </Link>
  );
};

export default ButtonBack;