import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Column = (props) => {

  return (
    <Container>{props.children}</Container>
  )
}

export default Column;