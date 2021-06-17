import { useContext } from "react";
import { RickMortyContext } from "../context/RickMortyContext";
import Character from "./Character";
import Loader from "./Loader";
import "./CharactersContainer.css";
import MessageError from "./MessageError";

const CharactersContainer = () => {
  const {
    errorMsg,
    dataCharacters,
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

      <section
        className={`characters-container ${isLoading ? "dis-flex-center" : ""}`}
      >
        {isLoading ? (
          <Loader />
        ) : (
          dataCharacters?.map((character) => (
            <Character key={character.id} character={character} />
          ))
        )}
      </section>
    </div>
  );
};

export default CharactersContainer;
