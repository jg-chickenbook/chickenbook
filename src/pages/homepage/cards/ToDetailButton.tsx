import { Link } from "react-router-dom";

type ToDetailButtonProps = {
  member: {
    id: number;
  };
};

const ToDetailButton = ({ member }: ToDetailButtonProps) => {
  return (
    <Link className="button__primary" to={ `/detail/${member.id}` } >
      More info
    </Link>
  );
};

export default ToDetailButton;