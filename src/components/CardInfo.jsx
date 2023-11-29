import React from "react";
import styled from "styled-components";
import eggshell from "../assets/eggshell.png";

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

const Status = styled.p`
  font-size: small;
  color: gray;
  text-align: right;
  margin-top: -5px;
  margin-right: 5px;
`

const Name = styled.h3`
  margin-top: 5px;
  margin-bottom: 0;
`

const Headline = styled.p`
  color: blue;
  margin-top: 0;
`

const ToDetailButton = styled.button`
  background-color: white;
  border-style: none;
  background-color: #B486FF;
  border-radius: 0.7rem;
  border: 2px solid #191919;
  box-shadow: 3px 5px #191919;
  padding: 5px;
  margin-top: 25px;
  transition: all .5s ease; 

  &:hover {
    background-color: #B486FF;
  }

  &:active {
    background-color: #C39EFF;
    box-shadow: 1px 3px #191919;
  }
`

const CardInfo = ({ name, status, headline }) => {
  return (
    <Container>
      <TextBlock>
        <Status>{status}</Status>
        <Name>{name}</Name>
        <Headline>{headline}</Headline>
        <ToDetailButton>More information</ToDetailButton>
      </TextBlock>
    </Container>
  );
};

export default CardInfo;