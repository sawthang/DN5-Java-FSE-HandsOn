import React from "react";

function LoginButton(props) {
  return (
    <button className="auth-button" onClick={props.onClick}>
      Login
    </button>
  );
}

export default LoginButton;
