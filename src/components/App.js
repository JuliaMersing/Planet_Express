import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Countdown from "./Countdown";
import Newsletter from "./Newsletter";
import Packages from "./Packages";
import "../stylesheet/app.scss";

const App = () => {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <div className="page__components">
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
