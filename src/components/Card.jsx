import React from "react";
import JGchicken from "../assets/jg-chicken.png";
import CardInfo from "./CardInfo";
import { ProfileCard, ProfileImage } from "./Card.styling";

const Card = ({member}) => {

  return (
    <ProfileCard>
      <ProfileImage alt="Profile Image" src={JGchicken} />
      <CardInfo 
        name={member.name} 
        status={member.status} 
        headline={member.headline}
      />
    </ProfileCard>
  );
}

export default Card;