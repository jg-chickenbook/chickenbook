// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { members as membersDummyList } from "../../data/members";
// import CardView from "./CardView";
// import Header from "./Header";
// import BubbleContainer from "./bubbles/BubbleContainer";
// import ButtonBack from "./ButtonBack";

// export default function Detail() {
//   const { id } = useParams();
//   const [member, setMember] = useState(null);

//   useEffect(() => {
//     const findMember = membersDummyList.find((member) => member.id == parseInt(id));
//     if (findMember) {
//       setMember(findMember)
//       } else {
//         setMember(null)
//     }
//   }, [id]);

//   if (!member) {
//      return <div>Loading...</div>;
//    }

//   const skills = member.mainSkills.map((skill, key) => <li key={ key }>{ skill }</li>);

//   const projects = member.bestProjects.map((project, key) => (
//     <li key={ key }>
//        <a href={ project.link }>{ project.name }</a>
//     </li>
//   ));

//   return (
//     <>
//       <CardView>
//         <Header key={ member.id }
//           name={ member.name }
//           headline={ member.headline }
//           status={ member.status }
//         />
//         <BubbleContainer
//           skillsList={ skills }
//           projectsList={ projects }
//           email={ member.email }
//           phone={ member.phone }
//           about={ member.about }
//         />
//       </CardView>
//       <ButtonBack />
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { members as membersDummyList } from "../../data/members";
import CardView from "./CardView";
import Header from "./Header";
import BubbleContainer from "./bubbles/BubbleContainer";
import ButtonBack from "./ButtonBack";
import EditProfileForm from "./EditDetail"; 
import "../../style/_buttons.scss"

export default function Detail() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const findMember = membersDummyList.find(member => member.id === parseInt(id));
    if (findMember) {
      setMember(findMember);
    }
  }, [id]);

  if (!member) return <div>Loading...</div>;

  const handleSave = (updatedMember) => {
    // This is where the changes should be sent to the server, now we just update the status
    setMember(updatedMember);
    setEditMode(false);
  };

  return (
    <>
      <CardView>
        {editMode ? (
          <EditProfileForm
            member={member}
            onSave={handleSave}
            // other necessary features or props
          />
        ) : (
          <>
            <Header key={member.id} name={member.name} headline={member.headline} status={member.status} />
            <BubbleContainer
              skillsList={member.mainSkills.map((skill, key) => <li key={key}>{skill}</li>)}
              projectsList={member.bestProjects.map((project, key) => (
                <li key={key}>
                  <a href={project.link}>{project.name}</a>
                </li>
              ))}
              email={member.email}
              phone={member.phone}
              about={member.about}
            />
            <button className="button__primary" onClick={() => setEditMode(true)}>Edit Profile</button>
          </>
        )}
      </CardView>
      <ButtonBack />
    </>
  );
}
