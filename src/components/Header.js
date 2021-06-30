import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/RickAndMorty.png";
import { RickMortyContext } from "../context/RickMortyContext";
import "./Header.css";
import ToggleDarkMode from "./ToggleDarkMode";

const Header = () => {
  const { setErrorMsg, setCharacterPage } = useContext(RickMortyContext);
  const handleClicImg = () => {
    setCharacterPage("https://rickandmortyapi.com/api/character");
    setErrorMsg({});
  };
  return (
    <header id="header">
      <ToggleDarkMode />
      <Link to="/">
        <img id="header__img" onClick={handleClicImg} src={logo} alt="" />
      </Link>
    </header>
  );
};

export default Header;
