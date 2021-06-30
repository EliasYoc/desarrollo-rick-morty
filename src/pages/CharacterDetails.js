import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MessageError from "../components/MessageError";
import {
  initialCharactersPage,
  RickMortyContext,
} from "../context/RickMortyContext";
import "./CharacterDetails.css";

const CharacterDetails = () => {
  const value = useParams();
  // console.log(value);
  const [characterSelected, setCharacterSelected] = useState({});
  const { errorMsg, setErrorMsg, isLoading, setIsLoading } =
    useContext(RickMortyContext);

  // No se si esta bien animar el header manipulando el DOM así, no supe usar useRef en Header desde este component.
  useEffect(() => {
    const $header = document.querySelector("#header");
    const $img = document.querySelector("#header__img");
    $header.classList.add("big-header");
    $img.classList.add("mg-tp-img");
    return () => {
      $header.classList.remove("big-header");
      $img.classList.remove("mg-tp-img");
    };
  }, []);
  useEffect(() => {
    const getCharacter = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${initialCharactersPage}/${value.id}`);
        // console.log(res);
        if (!res.ok) {
          let err = new Error("error");
          err.status = res.status;
          err.statusText = res.statusText;
          throw err;
        }
        const jsonCharacter = await res.json();
        setCharacterSelected(jsonCharacter);

        setIsLoading(false);
      } catch (err) {
        setErrorMsg(err);
        setIsLoading(false);
      }
    };
    getCharacter();
  }, [setErrorMsg, setIsLoading, value.id]);
  if (errorMsg.status)
    return (
      <div className="container-character-details">
        <div className="card-container">
          <MessageError
            text={`${errorMsg.status} ${
              errorMsg.statusText || "No se encontró"
            }`}
          />{" "}
        </div>
      </div>
    );
  return (
    <main className="container-character-details">
      {isLoading || !characterSelected.name ? (
        <Loader />
      ) : (
        <article className="card-container">
          {/* {console.log(characterSelected)} */}
          <div className="card-container_img">
            <img src={characterSelected.image} alt="" />
          </div>
          <div className="info-container-right">
            <section
              className={`title ${
                characterSelected.status?.toLowerCase() === "alive"
                  ? "alive"
                  : characterSelected.status?.toLowerCase() === "dead"
                  ? "dead"
                  : "unknow"
              }`}
            >
              <p>
                <span className="name">{characterSelected.name}: </span>{" "}
                {characterSelected.status}
              </p>
            </section>
            <section className="info">
              <p>
                <span className="name">gender: </span>{" "}
                {characterSelected.gender}
              </p>
              <p>
                <span className="name">species: </span>{" "}
                {characterSelected.species}
              </p>
              <p>
                <span className="name">origin: </span>{" "}
                {characterSelected.origin?.name}
              </p>
            </section>
            <section className="info-cartoon">
              <p>
                <span className="name">number of episodes: </span>{" "}
                {characterSelected.episode?.length}
              </p>
            </section>
          </div>
        </article>
      )}
    </main>
  );
};

export default CharacterDetails;
