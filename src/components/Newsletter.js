import "../stylesheet/component.scss";

const Newsletter = () => {
  const onClickListener = (ev) => {
    alert("Thanks for joining us!");
  };

  return (
    <div className="component__container">
      <div className="component__header">
        <i className="component__icon far fa-newspaper"></i>
        <h3 className="component__title">Join our newsletter</h3>
        <form className="component__info1" action="/signup" method="post">
          <label for="emailAddress"></label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            placeholder="Escribe tu email"
            className="component__input--mail"
          />
          <input
            className="component__button"
            type="submit"
            value="🚀"
            onClick={onClickListener}
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
