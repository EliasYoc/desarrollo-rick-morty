const MessageError = ({ text }) => {
  let containerError = {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--white-to-black)",
    backgroundColor: "crimson",
  };
  return (
    <div style={containerError} className="container-error">
      <p>{text}</p>
    </div>
  );
};

export default MessageError;
