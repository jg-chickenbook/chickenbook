import { Link } from "react-router-dom";

type ToDetailButtonProps = {
  member: {
    _id: number;
  };
};

const ToDetailButton = ({ member }: ToDetailButtonProps) => {
  return (
    <Link className="button__primary" to={ `/detail/${member._id}` } >
      More info
    </Link>
  );
};

export default ToDetailButton;