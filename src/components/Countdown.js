import "../stylesheet/components/countdown.scss";

const Countdown = () => {
  return (
    <div className="timer__container">
      <div className="timer">
        <i class="timer__icon far fa-clock"></i>
        <h2 className="timer_title">Finalización de la oferta</h2>
        <div className="timer__info">
          <p>87</p>
          <p>
            <small>Días</small>
          </p>
          <p>87</p>
          <p>
            <small>Horas</small>
          </p>
          <p>87</p>
          <p>
            <small>Minutos</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
