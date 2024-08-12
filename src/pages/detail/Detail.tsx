import { useParams } from "react-router-dom";
import CardView from "./CardView";
import Header from "./Header";
import BubbleContainer from "./bubbles/BubbleContainer";
import ButtonBack from "./ButtonBack";
import { Member } from "../../data/members";
import useFetchData from "../../hooks/useFetchData";
import apiConfig from "../../apiConfig";

export default function Detail() {
  const { id } = useParams();
  const { data: member, loading, error } = useFetchData<Member>(apiConfig.individualProfileUrl(id!));

  if (!member) {
    return <div>Loading...</div>;
  }

  const skills = member.skills.map((skill, key) => <li key={ key }>{ skill }</li>);

  const projects = member.projects.map((project, key) => (
    <li key={ key }>
      <a href={ project.link }>{ project.name }</a>
    </li>
  ));

  return (
    <>
      {loading ? <div>Loading...</div> : error ? <div>Error: {error}</div> :
        (<CardView>
          <Header key={ member._id }
            name={ member.name }
            headline={ member.headline }
            status={ member.status }
          />
          <BubbleContainer
            skillsList={ skills }
            projectsList={ projects }
            email={ member.email }
            phone={ member.phone }
            about={ member.about }
          />
        </CardView>)}
      <ButtonBack />
    </>
  );
}
