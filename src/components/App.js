import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Countdown from "./Countdown";

const App = () => {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <Countdown />
        <Footer />
      </div>
    </div>
  );
};

export default App;
