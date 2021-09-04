import { useEffect, useRef, useState } from "react";
import "../stylesheet/components/countdown.scss";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Septiembre 30, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop out timer
        clearInterval(interval.current);
      } else {
        //update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  //componentDidMount

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="timer__container">
      <div className="timer">
        <i class="timer__icon far fa-clock"></i>
        <h2 className="timer_title">Finalización de la oferta</h2>
        <div className="timer__info">
          <div className="timer__info1">
            <p>{timerDays}</p>
            <p>
              <small>Días</small>
            </p>
          </div>
          <div className="timer__info2">
            <p>{timerHours}</p>
            <p>
              <small>Horas</small>
            </p>
          </div>
          <div className="timer__info3">
            <p>{timerMinutes}</p>
            <p>
              <small>Minutos</small>
            </p>
          </div>
          <div className="timer__info4">
            <p>{timerSeconds}</p>
            <p>
              <small>Segundos</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
