import React, { useState } from "react";
import "../../style/_login-form.scss";
import ButtonBack from "../detail/ButtonBack";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    username: "" 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleForm = (event) => {
    event.preventDefault();
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you'd handle form submission, likely sending data to your backend
    console.log(formState);
  };

  return (
    <div className="login-form">
    <form onSubmit={handleSubmit}>
    <h1 className="login-title">{isLogin ? "Log in" : "Sign up"}</h1>
      {!isLogin && (
        <div className="login-form">
          <label htmlFor="password">Username</label>
          <input
            className="auth-input"
            name="username"
            type="text"
            placeholder="Username"
            value={formState.username}
            onChange={handleInputChange}
          />
        </div>
      )}
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formState.email}
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
