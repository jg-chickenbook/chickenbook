import styled from "styled-components";
import Column from "../Column";
import InfoBubble from "./InfoBubble";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: -50px;
  }
`

const SkillArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 5px;
  padding: 0 10px 0;  

  & > div {

  }
`
const StyledProjects = styled.ul`
  list-style-type: none;
  padding: 0 10px 0;
`
const StyledContact = styled.ul`
  list-style-type: none;
  padding: 0 10px 0;
`
const AboutText = styled.p`
  background-color: gray;
  padding: 0 15px 0;
  
`

const BubbleContainer = ({ skillsList, projectsList, email, phone, about  }) => {

  return (
    <Container>
      <Column>
        <InfoBubble title="Skills">
          <SkillArea>
            {skillsList}
          </SkillArea>
        </InfoBubble>
        <InfoBubble title="Projects">
          <StyledProjects>
            {projectsList}
          </StyledProjects>
        </InfoBubble>
        <InfoBubble title="Contact">
          <StyledContact>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
          </StyledContact>
        </InfoBubble>
      </Column>
        
      <Column>
        <InfoBubble title="About">
          <AboutText>{about}</AboutText>
        </InfoBubble>
      </Column>
    </Container>
  );
};

export default BubbleContainer;