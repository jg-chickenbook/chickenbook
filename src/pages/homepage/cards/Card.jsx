import React from "react";
import chicken from "../../../assets/chicken.png";
import CardInfo from "./CardInfo";
import styled from "styled-components";
import ToDetailButton from "./ToDetailButton";

const ProfileCard = styled.div`
  display: inline-block;
  justify-content: center;
  padding: 5px;
  margin: 5px;
`

const ProfileImage = styled.img`
  width: 175px;
  height: 145px;
  margin: auto;
  display: block;
  margin-bottom: -10px;
`

const Card = ({ member }) => {
  return (
    <ProfileCard>
      <ProfileImage alt="Profile Image" src={chicken} />
      <CardInfo member={member} />
      <ToDetailButton />
    </ProfileCard>
  );
}

export default Card;