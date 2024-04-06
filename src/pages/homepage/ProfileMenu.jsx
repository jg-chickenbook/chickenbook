// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="profile__menu">
      <Link to="/edit" onClick={() => handleNavigation("/edit")}>
        Add Profile
      </Link>
      <Link to="/edit" onClick={() => handleNavigation("/edit")}>
        Edit Profile
      </Link>
    </div>
  );
}

export default ProfileMenu;
