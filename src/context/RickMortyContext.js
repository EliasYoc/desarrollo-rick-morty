import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helper/helpHttp";

const RickMortyContext = createContext();

export const initialCharactersPage =
  "https://rickandmortyapi.com/api/character";
const RickMortyProvider = ({ children }) => {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [dataEpisodes, setDataEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [characterPage, setCharacterPage] = useState(initialCharactersPage);
  const [infoNextPrev, setInfoNextPrev] = useState({});
  const [errorMsg, setErrorMsg] = useState({});
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const RickMorty = async () => {
      try {
        setIsLoading(true);
        const getRickMortyLinks = await helpHttp().get(
          "https://rickandmortyapi.com/api"
        );
        const { episodes } = await getRickMortyLinks;
        const [dtCharacters, dtEpisodes] = await Promise.all([
          helpHttp().get(`${characterPage}`),
          helpHttp().get(episodes),
        ]);
        // console.log(dtCharacters);
        setIsLoading(false);

        if (dtCharacters.err) {
          setDataCharacters([]);
          throw dtCharacters;
        }
        // console.log("despues del error");
        setInfoNextPrev({
          prev: dtCharacters.info?.prev,
          next: dtCharacters.info?.next,
        });

        // console.log(dataCharacters.results, dataEpisodes);
        setDataCharacters(dtCharacters.results);
        setDataEpisodes(dtEpisodes.results);
      } catch (error) {
        setErrorMsg(error);
      }
    };
    RickMorty();
  }, [characterPage]);
  return (
    <RickMortyContext.Provider
      value={{
        dataCharacters,
        dataEpisodes,
        isLoading,
        setIsLoading,
        infoNextPrev,
        characterPage,
        setCharacterPage,
        errorMsg,
        setErrorMsg,
        setInputText,
        inputText,
      }}
    >
      {children}
    </RickMortyContext.Provider>
  );
};

export { RickMortyContext };
export default RickMortyProvider;
