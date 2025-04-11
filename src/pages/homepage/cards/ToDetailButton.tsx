import { Link } from "react-router-dom";

type ToDetailButtonProps = {
  profile: {
    _id: { $oid: string};
  };
};

const ToDetailButton = ({ profile }: ToDetailButtonProps) => {
  return (
    <Link className="button__primary" to={ `/detail/${profile._id}` } >
      More info
    </Link>
  );
};

export default ToDetailButton;