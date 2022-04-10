import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Character.css";

const Character = ({ character }) => {
  // const refLink = useRef();

  // const link = refLink.current;

  // const handleMouseOver = (e) => {
  //   if (!link) return;
  //   e.preventDefault();
  //   let randomNumber = Math.floor(Math.random() * 25) - 12;
  //   link.style.transform = `rotateZ(${randomNumber}deg) scale(1.1)`;
  // };
  // const handleMouseOut = (e) => {
  //   if (!link) return;
  //   e.preventDefault();
  //   link.style.transform = `rotateZ(0deg)`;
  // };

  const isAlive = character.status.toLowerCase();
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.5,
        // type: "spring",
        // damping: 15,
        // mass: 0.2,
        // velocity: 0.2,
        // bounce: 0,
        // stiffness: 50,
      }}
      layout="position"
      // id="personaje"
      // ref={refLink}
      className={`character ${
        isAlive === "alive"
          ? "isAlive"
          : isAlive === "dead"
          ? "isDeath"
          : "unknown"
      }`}
    >
      <Link className="character__link" to={`character/${character.id}`}>
        <div className="backgound-front"></div>
        <div className="character_container">
          <img loading="lazy" src={character.image} alt="" />
          <div className="character-info">
            <p className="character-name">{character.name}</p>
            <p className="character-status">{character.status}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Character;
