import { useEffect, useRef, useState } from "react";
import "../stylesheet/component.scss";

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
    <div className="component">
      <div className="component__header">
        <i className="component__icon far fa-clock"></i>
        <h2 className="component_title">-50% on your shipment!</h2>
        <div className="component__info">
          <div>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </div>
          <div>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </div>
          <div>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </div>
          <div>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </div>
          <small className="component__small">
            Offer valid until 30 september 2021
          </small>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
