import React from "react";
import styled from "styled-components";
import Header from "./Header";
import InfoBubble from "./InfoBubble";
// import { useParams } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const CardView = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FBFCD3;
  border-radius: 0.7rem;
  border: 2px solid #191919;
  box-shadow: 3px 5px #191919;
  padding: 25px;
  height: 800px;
  width: 1000px;
`

const BubbleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
`

const LeftBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const RightBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const BubbleTitle = styled.legend`
  margin-left: 25px;
  padding: 5px;
  font-weight: bold;
`

export default function DetailCard() {

  return (
    <PageContainer>
      <CardView>
        <Header />
        <BubbleContainer>
          <LeftBubbleContainer>
            <InfoBubble>
              <BubbleTitle>Skills</BubbleTitle>
              <p>Some text in a bubble</p>
            </InfoBubble>
            <InfoBubble>
              <BubbleTitle>Projects</BubbleTitle>
              <p>Some text in a bubble</p>
            </InfoBubble>
            <InfoBubble>
              <BubbleTitle>Contact</BubbleTitle>
              <p>Some text in a bubble</p>
            </InfoBubble>
          </LeftBubbleContainer>
        
          <RightBubbleContainer>
            <InfoBubble>
              <BubbleTitle>About</BubbleTitle>
              <p>Some text in a bubble</p>
            </InfoBubble>
          </RightBubbleContainer>
        </BubbleContainer>
      </CardView>
    </PageContainer>
  );
}
