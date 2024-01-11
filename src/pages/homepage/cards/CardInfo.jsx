import React from "react";
import styled from "styled-components";
import eggshell from "../../../assets/eggshell.png";

const Container = styled.div`
  background-image: url(${eggshell});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: contain;
  //background-color: #FFFFFF;
  padding: 5px;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
`

const TextBlock = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Status = styled.p`
  font-size: 0.9rem;
  color: gray;
  font-weight: bold;
`

const Name = styled.h3`
  margin-top: 25px;
  //color:  #9148FF;
  font-weight: bold;
  font-size: 1.3rem;
`

const Headline = styled.p`
  color:  #974EF8;
  font-weight: bold;
  margin-top: 0;
`

const CardInfo = ({ member }) => {
  return (
    <Container>
      <TextBlock>
        <Name>{member.name}</Name>
        <Headline>{member.headline}</Headline>
        <Status>{member.status}</Status>
      </TextBlock>
    </Container>
  );
};

export default CardInfo;