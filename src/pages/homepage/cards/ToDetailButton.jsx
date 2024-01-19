import React from "react";
import { Link } from "react-router-dom";

const ToDetailButton = ({ member }) => {
  return (
    <Link className="button__primary" to={ `/detail/${member.id}` } >
      More information
    </Link>
  );
};

export default ToDetailButton;
