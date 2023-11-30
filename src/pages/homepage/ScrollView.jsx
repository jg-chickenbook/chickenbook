import React from "react";
import styled from "styled-components";

const StyledScrollView = styled.div`
  overflow-y: scroll;
  border-top: 3px solid black;
  height: 85vh;
  padding: 15px;
`

const ScrollView = (props) => {
  return (
    <StyledScrollView>
      {props.children}
    </StyledScrollView>
  );
}

export default ScrollView;