import styled from "styled-components";

const Container = styled.fieldset`
  border-radius: 1.5rem;
  border: 2px solid #191919;
  background-color: white;
  height: 100%;
`

const BubbleTitle = styled.legend`
  margin-left: 25px;
  padding: 5px;
  font-weight: bold;
`

const InfoBubble = ({title, ...props}) => {

  return (
    <Container>
      <BubbleTitle>{title}</BubbleTitle>
      {props.children}
    </Container>
  );
  
};

export default InfoBubble;