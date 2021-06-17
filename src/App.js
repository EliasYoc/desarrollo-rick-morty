import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import RickMortyProvider from "./context/RickMortyContext";
import Main from "./pages/Main";
import "./App.css";
import CharacterDetails from "./pages/CharacterDetails";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <RickMortyProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/character/:id" component={CharacterDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </RickMortyProvider>
      </Router>
    </div>
  );
}

export default App;
