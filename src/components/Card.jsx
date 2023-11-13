import React from "react";
import JGchicken from "../assets/jg-chicken.png";
import {
  ProfileCard,
  ProfileImage,
  Status,
  Headline,
  Name,
  ProfileSection,
  SectionTitle,
  ContactInfo
} from "./Card.styling";

/**
 * ! <details> won't be used in the final version
 * ? What's the best way to display more information about person?
 */

const Card = ({member}) => {
  const skillList = member.mainSkills.map(
    (skill) => <li key={skill}>{skill}</li>
  );

  const projectList = member.bestProjects.map(
    (project) => <li key={project}>{project}</li>
  );

  return (
    <ProfileCard>
      <ProfileImage alt="Profile Image" src={JGchicken} />
      <div>
        <Status>{member.status}</Status>
        <Name>{member.name}</Name>
        <Headline>{member.headline}</Headline>
        <details>
          <summary>More Information</summary>
          
          <ProfileSection>
            <SectionTitle>Main Skills</SectionTitle>
            {skillList}
          </ProfileSection>

          <ProfileSection>
            <SectionTitle>Best projects</SectionTitle>
            {projectList}
          </ProfileSection>

          <ProfileSection>
            <SectionTitle>Contact</SectionTitle>
            <ContactInfo>Phone: {member.phone}</ContactInfo>
            <ContactInfo>E-mail: {member.email}</ContactInfo>
          </ProfileSection>
        </details>
      </div>
    </ProfileCard>
  );
}

export default Card;