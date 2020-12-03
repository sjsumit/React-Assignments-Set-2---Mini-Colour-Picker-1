import React from "react";
import "../styles/Child.css";

export default function Selection({ applyColor }) {
  const [selectedBackground, setSelectedBackground] = React.useState({
    background: ""
  });
  return (
    <div
      className="fix-box"
      onClick={() => applyColor(setSelectedBackground)}
      style={{ background: selectedBackground.background }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
