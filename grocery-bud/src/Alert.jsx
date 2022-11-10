import React, { useEffect } from "react";

const Alert = ({ type, msg, removerAlert}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removerAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  },[]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
