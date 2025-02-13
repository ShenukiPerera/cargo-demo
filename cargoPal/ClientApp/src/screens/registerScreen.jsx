import React from "react";
import RegisterClient from "../components/registerClient";
import RegisterAgent from "../components/registerAgent";

import RegisterAgentImage from "../assets/commons/agentRegister.jpg";
import RegisterClientImage from "../assets/commons/clientRegister.jpg";

export default function RegisterScreen(props) {
  const userType = props.location.state.user;
  const windowHeight = window.innerHeight;

  let backgroundImage;
  if (userType === "customer") {
    backgroundImage = RegisterClientImage;
  } else {
    backgroundImage = RegisterAgentImage;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        display: "table-cell",
        height: windowHeight,
        width: window.innerWidth,
        verticalAlign: "middle",
        textAlign: "center",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <div
        style={{
          display: "inline-block",
          textAlign: "initial",
          padding: 20,
        }}
      >
        <h1>Resgister</h1>
        <hr style={{ backgroundColor: "white" }} />
        {userType && userType === "customer" ? (
          <RegisterClient />
        ) : (
          <RegisterAgent />
        )}
      </div>
    </div>
  );
}
