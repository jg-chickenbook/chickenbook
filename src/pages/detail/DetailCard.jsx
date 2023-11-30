import React from "react";
import styled from "styled-components";
import CardView from "./CardView";
import Header from "./Header";
import InfoBubble from "./InfoBubble";
import { useParams } from "react-router-dom";
import { members } from "../../data/members";

const BubbleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
`
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const BubbleTitle = styled.legend`
  margin-left: 25px;
  padding: 5px;
  font-weight: bold;
`

const SkillList = styled.ul`
  list-style-type: circle;
`
const ProjectList = styled.ul`
  list-style-type: none;
`
const ContactInfo = styled.ul`
  list-style-type: none;
`

export default function DetailCard() {

  const { index } = useParams();

  const member = members[index];

  const skills = member.mainSkills.map((skill, key) => {
    return <li key={key}>{skill}</li>
  });

  const projects = member.bestProjects.map((project, key) => {
    return <li key={key}>{project}</li>
  });


  const email = member.email;
  const phone = member.phone;

  return (
    <CardView>
      <Header 
        name={member.name} 
        headline={member.headline} 
        status={member.status} 
      />
      <BubbleContainer>
        <LeftColumn>
          <InfoBubble>
            <BubbleTitle>Skills</BubbleTitle>
            <SkillList>
              {skills}
            </SkillList>
          </InfoBubble>
          <InfoBubble>
            <BubbleTitle>Projects</BubbleTitle>
            <ProjectList>
              {projects}
            </ProjectList>
          </InfoBubble>
          <InfoBubble>
            <BubbleTitle>Contact</BubbleTitle>
            <ContactInfo>
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
            </ContactInfo>
          </InfoBubble>
        </LeftColumn>
        
        <RightColumn>
          <InfoBubble>
            <BubbleTitle>About</BubbleTitle>
            <p>{JSON.stringify(member)}</p>
          </InfoBubble>
        </RightColumn>
      </BubbleContainer>
    </CardView>
  );
}
