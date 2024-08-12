import { useParams } from "react-router-dom";
import CardView from "./CardView";
import Header from "./Header";
import BubbleContainer from "./bubbles/BubbleContainer";
import ButtonBack from "./ButtonBack";
import { Profile } from "../../data/ProfileType";
import useFetchData from "../../hooks/useFetchData";
import apiConfig from "../../apiConfig";

export default function Detail() {
  const { id } = useParams();
  const { data: profile, loading, error } = useFetchData<Profile>(apiConfig.individualProfileUrl(id!));

  if (!profile) {
    return <div>Loading...</div>;
  }

  const skills = profile.skills.map((skill, key) => <li key={ key }>{ skill }</li>);

  const projects = profile.projects.map((project, key) => (
    <li key={ key }>
      <a href={ project.link }>{ project.name }</a>
    </li>
  ));

  return (
    <>
      {loading ? <div>Loading...</div> : error ? <div>Error: {error}</div> :
        (<CardView>
          <Header key={ profile._id }
            name={ profile.name }
            headline={ profile.headline }
            status={ profile.status }
          />
          <BubbleContainer
            skillsList={ skills }
            projectsList={ projects }
            email={ profile.email }
            phone={ profile.phone }
            about={ profile.about }
          />
        </CardView>)}
      <ButtonBack />
    </>
  );
}
