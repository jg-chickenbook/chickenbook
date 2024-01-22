import React from "react";
import chicken from "../../../assets/chicken.png";
import CardInfo from "./CardInfo";
import ToDetailButton from "./ToDetailButton";


const Card = ({ member }) => {
  return (
    <div className="card">
      <img className="card__image" alt="Profile image" src={ chicken } />
      <CardInfo member={ member } />
      <ToDetailButton key={ member.id } member={ member } />
    </div>
  );
};

export default Card;