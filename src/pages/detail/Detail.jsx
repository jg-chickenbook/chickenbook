import CardView from "./CardView";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { members } from "../../data/members";
import BubbleContainer from "./bubbles/BubbleContainer";

export default function DetailContent() {

  const { index } = useParams();

  const member = members[index];

  const skills = member.mainSkills.map((skill, key) => {
    return <div key={key}>{skill}</div>
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
      <BubbleContainer
        skillsList={skills}
        projectsList={projects}
        email={email}
        phone={phone}
        about={JSON.stringify(member)}
      />
    </CardView>
  );
}
