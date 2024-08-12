type CardInfoProps = {
  profile: {
    name: string;
    headline: string;
    status: string;
  };
};

const CardInfo = ({ profile }: CardInfoProps) => {
  return (
    <div className="card__container">
      <div className="text__block">
        <h2 className="name">{ profile.name }</h2>
        <h3 className="position">{ profile.headline }</h3>
        <p className="status">{ profile.status }</p>

      </div>
    </div>
  );
};

export default CardInfo;