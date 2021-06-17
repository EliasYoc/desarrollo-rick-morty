import "./NotFound.css";
import rickMortyScream from "../assets/rick-morty-gifs/rickMortyScream.gif";
const NotFound = () => {
  return (
    <section className="container-notfoud">
      <h1>Ops, esta ruta no existe</h1>
      <img src={rickMortyScream} alt="" />
    </section>
  );
};

export default NotFound;
