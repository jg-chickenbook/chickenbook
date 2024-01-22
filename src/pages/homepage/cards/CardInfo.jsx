import React from "react";

const CardInfo = ({ member }) => {
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