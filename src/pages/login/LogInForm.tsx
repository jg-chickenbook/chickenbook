import { useState } from "react";
import "../../style/_login-form.scss";
import ButtonBack from "../detail/ButtonBack";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    username: "" 
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleForm = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsLogin(!isLogin);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // validation
    if (!formState.username || !formState.password || (!isLogin && !formState.email)) {
      toast.warning("Please fill in all fields");
      return;
    }
  
    const url = isLogin ? "http://127.0.0.1:8000/api/accounts/login" : "http://127.0.0.1:8000/api/accounts/register";
  
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
  
      if (response.ok) {
        if (isLogin) {
          // store the token in local storage
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.user.username);
          // redirect to the home page
          navigate("/");  
          console.log(data);
        } else {
          // After successful registration, show a message and redirect to the login form
          toast.success("Registration successful! Please log in.");
          setIsLogin(true); // Switch to the login form
          console.log(data);
        }
      } else {
        // Handle server response errors (e.g., invalid credentials or existing user)
        toast.warning(data.detail || "User with this username or email already exists");
      }
    } catch (error) {
      // Handle network errors
      toast.error("Network error: Could not connect to the server.");
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">{isLogin ? "Log in" : "Sign up"}</h1>
        {!isLogin && (
          <div className="login-form">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </div>
        )}
        <label htmlFor="password">Username</label>
        <input
          className="auth-input"
          name="username"
          type="text"
          placeholder="Username"
          value={formState.username}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <button className="button__primary" type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        <a className="login-link" href="" onClick={toggleForm}>
          {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
        </a>
      </form>
      <ButtonBack />
    </div>
  );
}

export default AuthForm;
