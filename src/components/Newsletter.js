import { React, useState } from "react";
import "../stylesheet/component.scss";

const Newsletter = (props) => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    const value = ev.target.value;
    setEmail(value);
    console.log(value);
  };

  const handleClick = (ev) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="component__container">
      <div className="component__header">
        <i className="component__icon far fa-newspaper"></i>
        <h3 className="component__title">Join our newsletter</h3>
        <form className="component__info1" onChange={handleForm}>
          <label htmlFor="emailAddress"></label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            placeholder="Escribe tu email"
            className="component__input--mail"
            onChange={handleInput}
          />
        </form>
        <button className="component__button" onClick={handleClick}>
          🚀
        </button>
      </div>
      <div className={isOpen ? "" : "hidden"}>{email}</div>
    </div>
  );
};

export default Newsletter;
