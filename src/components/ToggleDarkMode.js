import "./ToggleDarkMode.css";
const ToggleDarkMode = () => {
  const handleToggle = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <div onClick={handleToggle} className="toggle">
      <span className="toggle__switch"></span>

      <div className="toggle__container">
        <span className="toggle__sun"></span>
        <span className="toggle__moon"></span>
      </div>
    </div>
  );
};

export default ToggleDarkMode;
