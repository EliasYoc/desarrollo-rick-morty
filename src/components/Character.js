import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Character.css";
const Character = ({ character }) => {
  const refLink = useRef();

  const link = refLink.current;

  const handleMouseOver = (e) => {
    if (!link) return;
    e.preventDefault();
    let randomNumber = Math.floor(Math.random() * 25) - 12;
    link.style.transform = `rotateZ(${randomNumber}deg) scale(1.1)`;
  };
  const handleMouseOut = (e) => {
    if (!link) return;
    e.preventDefault();
    link.style.transform = `rotateZ(0deg)`;
  };

  const isAlive = character.status.toLowerCase();
  return (
    <Link
      id="personaje"
      ref={refLink}
      to={`character/${character.id}`}
      className={`character ${
        isAlive === "alive"
          ? "isAlive"
          : isAlive === "dead"
          ? "isDeath"
          : "unknown"
      }`}
    >
      <div
        className="backgound-front"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
      <div className="character_container">
        <img loading="lazy" src={character.image} alt="" />
        <div className="character-info">
          <p className="character-name">{character.name}</p>
          <p className="character-status">{character.status}</p>
        </div>
      </div>
    </Link>
  );
};

export default Character;
