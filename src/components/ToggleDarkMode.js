import { useRef } from "react";
import "./ToggleDarkMode.css";
const ToggleDarkMode = () => {
  const refToggle = useRef();

  const toggle = refToggle.current;

  const handleToggle = () => {
    console.log(toggle);
    // toggle.classList.toggle("active");
    document.body.classList.toggle("dark");
  };
  return (
    <div onClick={handleToggle} ref={refToggle} className="toggle">
      <span className="toggle__switch"></span>

      <div className="toggle__container">
        <span className="toggle__sun"></span>
        <span className="toggle__moon"></span>
      </div>
    </div>
  );
};

export default ToggleDarkMode;
