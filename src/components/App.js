import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <div className="timer__container">
          <div className="timer">
            <i class="far fa-clock"></i>
            <h2>Finalización de la oferta</h2>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
