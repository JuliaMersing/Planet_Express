import React, { useState, useEffect } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Countdown from "./Countdown";
import Newsletter from "./Newsletter";
import Packages from "./Packages";
import "../stylesheet/app.scss";
import PageNotFound from "./PageNotFound";
import getApiData from "../services/Api";
import ls from "../services/LocalStorage";
import Team from "../components/Team/CharactersList";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  return (
    <div className="app">
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="page__wrapper">
              <Countdown />
              <Packages />
            </div>
            <Newsletter />
          </Route>
          <Route path="/team">
            <Team characters={characters} />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default App;
