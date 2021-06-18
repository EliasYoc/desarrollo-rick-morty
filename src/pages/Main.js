import CharactersContainer from "../components/CharactersContainer";
import SearchCharacters from "../components/SearchCharacters";
import "./Main.css";

const Characters = () => {
  return (
    <main>
      <SearchCharacters />
      <CharactersContainer />
    </main>
  );
};

export default Characters;
