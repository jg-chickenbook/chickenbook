import chicken from "../../../assets/chicken.png";
import CardInfo from "./CardInfo";
import ToDetailButton from "./ToDetailButton";

type CardProps = {
  member: {
    id: number;
    name: string;
    headline: string;
    status: string;
  };
};

const Card = ({ member }: CardProps) => {
  return (
    <div className="card">
      <img className="card__image" alt="Profile image" src={ chicken } />
      <CardInfo member={ member } />
      <ToDetailButton key={ member.id } member={ member } />
    </div>
  );
};

export default Card;