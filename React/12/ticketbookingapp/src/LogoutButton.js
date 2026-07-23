import React from "react";

function LogoutButton(props) {
  return (
    <button className="auth-button" onClick={props.onClick}>
      Logout
    </button>
  );
}

export default LogoutButton;
