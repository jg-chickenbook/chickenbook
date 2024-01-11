import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { members } from "../../../data/members";

const ToDetailButton = styled.button`
  border-style: none;
  background-color: #C6A4FA;
  color: #000000;
  border-radius: 30px;
  border: 2px solid #191919;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 25px;
  transition: all .5s ease; 
  cursor: pointer;

  &:hover {
    box-shadow: 3px 5px #191919;
  }

  &:active {
    background-color: #C39EFF;
    box-shadow: 1px 3px #191919;
  }
`

const ToDetailButtonComponent = () => {
  const member = members;
  
  return (
    <Link to={`/detail/${members.indexOf(member)}`} >
      <ToDetailButton>More information</ToDetailButton>
    </Link>
  );
}

export default ToDetailButtonComponent;
