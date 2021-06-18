import rickLaughing from "../assets/rick-morty-gifs/rickLaughing.gif";
const MessageError = ({ text }) => {
  let containerError = {
    padding: "0 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--white-to-black)",
    backgroundColor: "#bf2440",
  };
  return (
    <div style={containerError} className="container-error">
      <p>{text}, ¿en serio creíste que lo hallarías?</p>
      <img
        style={{ width: "150px", height: "150px" }}
        src={rickLaughing}
        alt=""
      />
    </div>
  );
};

export default MessageError;
