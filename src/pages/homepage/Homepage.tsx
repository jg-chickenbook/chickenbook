import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CardList from "./cards/CardList";
import SearchBox from "./SearchBox";
import { Member, members as membersDummyList } from "../../data/members";
import ScrollView from "./ScrollView";
import "../login/LogInForm";
import ProfileMenu from "./ProfileMenu";
import { Link } from "react-router-dom";

import { toast } from "sonner";


export default function Homepage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchfield, setSearchfield] = useState("");

  const navigate = useNavigate(); // For navigating after logout

  // Check for user token or username in local storage
  const isLoggedIn = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  useEffect(() => {
    setMembers(membersDummyList);
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  const filteredMembers = members.filter((member) => {
    return (
      member.name.toLowerCase().includes(searchfield.toLowerCase()) ||
      member.headline.toLowerCase().includes(searchfield.toLowerCase()) ||
      member.mainSkills.join(" ").toLowerCase().includes(searchfield.toLowerCase())
    );
  });

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    // Check if the token exists
    if (!token) {
        toast.error("No token found");
      return;
    }

    // Prepare the request options
    const url = "http://127.0.0.1:8000/api/accounts/logout"

    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`, // Adjust according to your token type
      },
    };

    try {
      const response = await fetch(url, requestOptions);
      
      if (!response.ok) {
        throw new Error("Logout failed");
      }

      // Clear the user token and username from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("username");

      // Optionally, show a success message
      toast.info("Logged out successfully");

      // Redirect to the login page or refresh the homepage
      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleProfileMenuClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <>
      <header className="header">
        <h1 className="main__title">Chickenbook</h1>
        <SearchBox searchChange={onSearchChange} />
        {isLoggedIn ? (
            <div className="user__box">
              <span className="nav__username" onClick={handleProfileMenuClick}>
                Welcome, {username}
              </span>
              {showProfileMenu && <ProfileMenu handleLogout={handleLogout} />} {/* Pass handleLogout as a prop */}
            </div>
          ) : (
            <Link className="nav__link" to="/login">
              Log In
            </Link>
          )}
      </header>
      <main>
        <ScrollView>
          <CardList members={filteredMembers} />
        </ScrollView>
      </main>
    </>
  );
}