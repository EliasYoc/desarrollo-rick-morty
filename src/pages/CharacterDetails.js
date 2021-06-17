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
  const [characterSelected, setCharacterSelected] = useState({});
  const { errorMsg, setErrorMsg, isLoading, setIsLoading } =
    useContext(RickMortyContext);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${initialCharactersPage}/${value.id}`);
        console.log(res);
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
      }
    };
    getCharacter();
  }, [setErrorMsg, setIsLoading, value.id]);
  if (errorMsg.status)
    return isLoading ? (
      <Loader />
    ) : (
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
          {console.log(characterSelected)}
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
                <span className="name">specie: </span>{" "}
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
