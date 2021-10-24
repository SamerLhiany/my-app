import React from "react";

const Button = ({ color, method }) => {
  return (
    <div>
      <input
        style={{ background: color, color: "white" }}
        onClick={() => method(color)}
        type="button"
        value={color}
      />
    </div>
  );
};

export default Button;