import { useContext } from "react";
import {
  initialCharactersPage,
  RickMortyContext,
} from "../context/RickMortyContext";
import "./SearchCharacters.css";
const SearchCharacters = () => {
  const { setErrorMsg, inputText, setInputText, setCharacterPage } =
    useContext(RickMortyContext);
  const handleChange = (e) => setInputText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg({});
    // console.log(`${initialCharactersPage}?name=${inputText}`);
    setCharacterPage(`${initialCharactersPage}?name=${inputText}`);
  };
  return (
    <section className="search-characters">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          onChange={handleChange}
          type="text"
          name="character"
          placeholder="Busca el personaje"
          value={inputText}
        />
        <button className="search-form_btn">Buscar</button>
      </form>
    </section>
  );
};

export default SearchCharacters;
