import React from "react";
import "../../style/_login-form.scss";
import ButtonBack from "../detail/ButtonBack";

function LogInForm() {  
  return (
    <div className="login-form">
      <form>
        <h1>Log in</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button className="button__primary" type="submit">Log in</button>
      </form> 
         <ButtonBack />
    </div>
  );
}

export default LogInForm;
