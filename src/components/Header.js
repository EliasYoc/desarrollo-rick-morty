import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/RickAndMorty.png";
import { RickMortyContext } from "../context/RickMortyContext";
import "./Header.css";
import ToggleDarkMode from "./ToggleDarkMode";

const Header = () => {
  const {
    setErrorMsg,
    setCharacterPage,
    dataCharacters,
    setFilteredCharacters,
  } = useContext(RickMortyContext);
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const handleClicImg = () => {
    setCharacterPage("https://rickandmortyapi.com/api/character");
    setErrorMsg({});
  };
  const handleOpenFilterBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };
  const handleFilter = (e) => {
    const characterStatus = e.target.dataset.status;
    setIsBoxOpen(false);
    if (characterStatus === "All") return setFilteredCharacters(dataCharacters);
    const filteredCharacters = dataCharacters.filter(
      (character) => character.status === characterStatus
    );
    setFilteredCharacters(filteredCharacters);
  };
  return (
    <header id="header">
      <ToggleDarkMode />
      <Link to="/">
        <img id="header__img" onClick={handleClicImg} src={logo} alt="" />
      </Link>
      <div className="filterwrap" onClick={handleOpenFilterBox}>
        <i
          style={{ cursor: "pointer" }}
          className="fas fa-sort-amount-down-alt"
        ></i>
        <div className={`filterbox ${isBoxOpen ? "open" : "closed"}`}>
          <span onClick={handleFilter} data-status="All">
            Todos
          </span>
          <span onClick={handleFilter} data-status="Alive">
            Vivo
          </span>
          <span onClick={handleFilter} data-status="unknown">
            Desconocido
          </span>
          <span onClick={handleFilter} data-status="Dead">
            Muerto
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
