import React from "react";
import chicken from "../assets/chicken.png";
import CardInfo from "./CardInfo";
import styled from "styled-components";

const ProfileCard = styled.div`
  display: inline-block;
  justify-content: center;
  padding: 5px;
  margin: 5px;

  &:hover {
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    transform: scale(1.05);
  }
`

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: auto;
  display: block;
  margin-bottom: -45px;
`

const Card = ({member}) => {

  return (
    <ProfileCard>
      <ProfileImage alt="Profile Image" src={chicken} />
      <CardInfo 
        name={member.name} 
        status={member.status} 
        headline={member.headline}
      />
    </ProfileCard>
  );
}

export default Card;