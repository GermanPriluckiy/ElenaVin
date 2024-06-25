import React from "react";

function Button({link}) {
  return (
    <div
      className="button"
      style={{
        backgroundImage: `url(${require({link})})`,
      }}
    ></div>
  );
}

export default Button;
