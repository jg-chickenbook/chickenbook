// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProfileMenu() {
  // const navigate = useNavigate();


  return (
    <div className="profile__menu">
      <Link to="/edit">Add Profile</Link>
      <Link to="/edit">Edit Profile</Link>
    </div>
  );
}

export default ProfileMenu;