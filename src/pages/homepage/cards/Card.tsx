import chicken from "../../../assets/chicken.png";
import CardInfo from "./CardInfo";
import ToDetailButton from "./ToDetailButton";

type CardProps = {
  profile: {
    _id: { $oid: string};
    name: string;
    headline: string;
    status: string;
  };
};

const Card = ({ profile }: CardProps) => {
  console.log('img', chicken);
  return (
    <div className="card">
      <img className="card__image" alt="Profile image" src={ chicken } />
      <CardInfo profile={ profile } />
      <ToDetailButton key={ profile._id.$oid } profile={ profile } />
    </div>
  );
};

export default Card;