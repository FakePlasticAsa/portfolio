import { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function Test() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("Hello, React world!");

  return (
    <div style={{ padding: "20px" }}>
      <ToggleButton
        onClick={() => setIsVisible(!isVisible)}
        label={isVisible ? "Hide" : "Show"}
      />

      <ToggleButton
        onClick={() => setMessage("You changed the text!")}
        label="Change Text"
      />

      {isVisible && <p>{message}</p>}
    </div>
  );
}
