import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../searchbox/SearchBox";
import ProfileMenu from "../../pages/homepage/ProfileMenu";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "sonner";
import styled from "styled-components";

export default function Header(props: { onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {

  const navigate = useNavigate(); // For navigating after logout

  // Check for user token or username in local storage
  const isLoggedIn = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    // Check if the token exists
    if (!token) {
      toast.error("No token found");
      return;
    }

    // Prepare the request options
    const url = "http://127.0.0.1:8000/api/accounts/logout";

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
    <StyledHeader>
        <StyledTitle>Chickenbook</StyledTitle>
        <SearchBox searchChange={props.onSearchChange} />
        {isLoggedIn ? (
          <StyledUserBox>
            <StyledNavUsername onClick={handleProfileMenuClick}>
                Welcome, {username}
            </StyledNavUsername>
            {showProfileMenu && <ProfileMenu handleLogout={handleLogout} />} {/* Pass handleLogout as a prop */}
          </StyledUserBox>
        ) : (
          <StyledLogIn className="nav__link" to="/login">
              Log In
          </StyledLogIn>
        )}
      </StyledHeader>
  );
}

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    background-color: var(--color-primary);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    border-bottom: 2px solid var(--color-secondary);
    padding: 0 3rem;
    padding-block: 1rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      gap: 1rem;
      padding: 0 .5rem;
      border: none;
    }
`;

const StyledLogIn = styled(Link)`

    color: var(--color-text-900);
    font-size: 1.2rem;
    font-weight: 900;
    text-decoration: none;
    border-radius: 5px;
    border: 2px solid var(--color-text-900);
    padding: 0.625rem 1.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    transition: all .5s ease;
    &:hover {
      background-color: var(--color-button-hover);
      color: var(--color-text);
      box-shadow: 3px 5px var(--color-text-900);
    }
  }

  @media (max-width: 768px) {
    order: 2;
    margin: 0;
  }
`;

const StyledTitle = styled.h1`
  @media (max-width: 768px) {
   // order: 1;
   font-size: 1.5rem;
  }

  @media (max-width: 370px) {
   margin-bottom: 0;
  }
`;

const StyledUserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledNavUsername = styled.span`
  color: var(--color-text-900);
  font-size: 1.2rem;
  font-weight: 900;
  text-decoration: none;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: var(--link-color);
  }
`;