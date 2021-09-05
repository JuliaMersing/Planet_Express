import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Countdown from "./Countdown";
import Newsletter from "./Newsletter";
import Packages from "./Packages";
import "../stylesheet/app.scss";
import PageNotFound from "./PageNotFound";
import { Route, Switch } from "react-router-dom";

const App = () => {
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
