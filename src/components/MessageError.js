import { useEffect, useState } from "react";
import rickLaughing from "../assets/rick-morty-gifs/rickLaughing.gif";
const MessageError = ({ text }) => {
  const [hasBadConnection, setHasBadConnection] = useState(false);
  let containerError = {
    padding: `${hasBadConnection ? "20px" : "0px"} 10px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--white-to-black)",
    backgroundColor: "#bf2440",
  };
  useEffect(() => {
    // console.log(hasBadConnection);
    // console.log(navigator.connection);
    const connection = navigator.connection;
    if (connection.effectiveType === "2g" && connection.downlink < 1) {
      setHasBadConnection(true);
      // console.log("hay mala conexion");
    } else {
      setHasBadConnection(false);
      // console.log("buena conexion");
    }
  }, [hasBadConnection]);
  return (
    <div style={containerError} className="container-error">
      <p>{text}, ¿en serio creíste que lo hallarías?</p>
      {!hasBadConnection && (
        <img
          style={{ width: "150px", height: "150px" }}
          src={rickLaughing}
          alt=""
        />
      )}
    </div>
  );
};

export default MessageError;
