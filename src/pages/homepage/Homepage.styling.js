import styled from "styled-components";

export const MainContainer = styled.div`
  text-align: center;
`

export const HeaderArea = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const AppTitle = styled.h1`
  @media (max-width: 700px) {
    margin-bottom: 0;
  }
`