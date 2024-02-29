import React, { useState } from "react";
import "../../style/_login-form.scss";
import ButtonBack from "../detail/ButtonBack";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
      } else {
        // Handle failed login
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Log in</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button__primary" type="submit">
          Log in
        </button>
      </form>
      <ButtonBack />
    </div>
  );
}

export default LogInForm;
