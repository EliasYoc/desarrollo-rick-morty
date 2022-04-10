import { useContext } from "react";
import { RickMortyContext } from "../context/RickMortyContext";
import Character from "./Character";
import Loader from "./Loader";
import "./CharactersContainer.css";
import MessageError from "./MessageError";
import { motion, AnimatePresence } from "framer-motion";

const CharactersContainer = () => {
  const {
    errorMsg,
    filteredCharacters,
    isLoading,
    setCharacterPage,
    infoNextPrev,
    inputText,
  } = useContext(RickMortyContext);
  const handleClickNext = () => setCharacterPage(infoNextPrev.next);
  const handleClickPrev = () => setCharacterPage(infoNextPrev.prev);
  // console.log("render container");
  if (errorMsg.err)
    return (
      <MessageError
        text={`Error ${errorMsg.status}: ${errorMsg.statusText}, no se encontró ${inputText} `}
      />
    );

  return (
    <div className="container">
      {!isLoading && (
        <div
          className={`container_btns ${
            (!infoNextPrev.prev && !infoNextPrev.next) || errorMsg.err
              ? "dis-none"
              : ""
          }`}
        >
          <div
            onClick={infoNextPrev.prev && handleClickPrev}
            className={`btn left ${!infoNextPrev.prev && "hide"}`}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
          <div
            onClick={infoNextPrev.next && handleClickNext}
            className={`btn right ${!infoNextPrev.next && "hide"}`}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      )}

      <motion.section
        layout="size"
        transition={{
          type: "spring",
          mass: 0.5,
          bounce: 0,
          duration: 0.5,
        }}
        className={`characters-container ${isLoading ? "dis-flex-center" : ""}`}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <AnimatePresence>
            {filteredCharacters?.map((character) => (
              <Character key={character.id} character={character} />
            ))}
          </AnimatePresence>
        )}
      </motion.section>
    </div>
  );
};

export default CharactersContainer;
