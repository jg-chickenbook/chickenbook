import React from "react";
import styled from "styled-components";
import eggshell from "../../../assets/eggshell.png";

const Container = styled.div`
  background-image: url(${eggshell});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: contain;
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
  font-size: 0.8rem;
  color: gray;
  font-weight: bold;
`

const Name = styled.h3`
  margin-top: 25px;
`

const Headline = styled.p`
  color:  #8D82F6;
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