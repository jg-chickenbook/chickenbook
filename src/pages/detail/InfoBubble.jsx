import React from "react";
import styled from "styled-components";

const Container = styled.fieldset`
  border-radius: 1.5rem;
  border: 2px solid #191919;
  background-color: white;
  padding: 10px;
  height: 100%;
`

const InfoBubble = (props) => {

  return (
    <Container>
      {props.children}
    </Container>
  );
  
};

export default InfoBubble;