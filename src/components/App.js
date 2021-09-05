import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Countdown from "./Countdown";
import Newsletter from "./Newsletter";
import Packages from "./Packages";
import "../stylesheet/app.scss";

const App = () => {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <div className="page__wrapper">
          <Countdown />
          <Packages />
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
