import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/_profile-menu.scss";
import "../../style/_buttons.scss";

type ProfileMenuProps = {
  handleLogout: () => void;
};

function ProfileMenu(props: ProfileMenuProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="profile__menu">
      <Link className="profile-menu__link" to="/edit" onClick={() => handleNavigation("/edit")}>
        Add Profile
      </Link>
      <Link className="profile-menu__link" to="/edit" onClick={() => handleNavigation("/edit")}>
        Edit Profile
      </Link>
      <button className="button__primary" onClick={props.handleLogout}>Log Out</button>
    </div>
  );
}

export default ProfileMenu;
