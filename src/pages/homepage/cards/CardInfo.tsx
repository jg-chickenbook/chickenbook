type CardInfoProps = {
  member: {
    name: string;
    headline: string;
    status: string;
  };
};

const CardInfo = ({ member }: CardInfoProps) => {
  return (
    <div className="card__container">
      <div className="text__block">
        <h2 className="name">{ member.name }</h2>
        <h3 className="position">{ member.headline }</h3>
        <p className="status">{ member.status }</p>

      </div>
    </div>
  );
};

export default CardInfo;