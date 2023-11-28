import React from "react";
import styled from "styled-components";
import eggshell from "../assets/eggshell.png";

const Status = styled.p`
  font-size: small;
  color: gray;
  text-align: right;
  margin-top: -35px;
  margin-right: 5px;
`

const Name = styled.h2`
  margin-top: 5px;
  margin-bottom: 0;
`

const Headline = styled.p`
  color: blue;
  margin-top: 0;
`

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
  align-items: center;
`

const TextBlock = styled.div`
  width: 75%;
`

const CardInfo = ({ name, status, headline }) => {
  return (
    <Container>
      <TextBlock>
        <Status>{status}</Status>
        <Name>{name}</Name>
        <Headline>{headline}</Headline>
      </TextBlock>
    </Container>
  );
};

export default CardInfo;