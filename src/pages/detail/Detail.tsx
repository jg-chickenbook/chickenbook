import { useParams } from "react-router-dom";
import CardView from "./CardView";
import Header from "./Header";
import BubbleContainer from "./bubbles/BubbleContainer";
import ButtonBack from "./ButtonBack";
import { Profile } from "../../data/ProfileType";
import useFetchData from "../../hooks/useApiRequest";
import chicken from "../../assets/chick-chicko.png";

export default function Detail() {
  const { id } = useParams();
  const { data: profile, loading, error } = useFetchData<Profile>(`profiles/${id}`);

  const skills = profile?.skills.map((skill, key) => <li key={ key }>{ skill }</li>);

  const projects = profile?.projects.map((project, key) => (
    <li key={ key }>
      <a href={ project.link }>{ project.name }</a>
    </li>
  ));

  return (
    <>
      {loading ? <div>Loading...</div> : error ? <div>Error: {error}</div> :
        (<div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <CardView>
            <Header key={ profile?._id }
              name={ profile?.name || "No name" }
              headline={ profile?.headline || "No headline"}
              status={ profile?.status || "No status" }
              profilePic={ chicken }
              // profilePic={ profile?.profilePic || chicken }
            />
            <BubbleContainer
              skillsList={ skills }
              projectsList={ projects }
              email={ profile?.email || "No email" }
              phone={ profile?.phone || "No phone" }
              about={ profile?.about || "No about text" }
            />
          </CardView>
          <div style={{ position: "absolute", right: "2rem", top: "0" }}>
            <ButtonBack />
          </div>
        </div>)}
    </>
  );
}
