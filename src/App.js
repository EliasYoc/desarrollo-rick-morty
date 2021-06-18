import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import RickMortyProvider from "./context/RickMortyContext";
import Main from "./pages/Main";
import "./App.css";
import CharacterDetails from "./pages/CharacterDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <RickMortyProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/character/:id" component={CharacterDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </RickMortyProvider>
      </HashRouter>
    </div>
  );
}

export default App;
