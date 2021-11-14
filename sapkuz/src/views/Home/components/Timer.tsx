import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from 'styled-components'

const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 10,
    trailColor: "#6a93ad"
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  // eslint-disable-next-line no-bitwise
  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  // eslint-disable-next-line no-bitwise
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  // eslint-disable-next-line no-bitwise
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  // eslint-disable-next-line no-bitwise
  const getTimeDays = (time) => (time / daySeconds) | 0;

const TimerBox = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'IBM Plex Sans', sans-serif;;
  text-align: center;
  padding-top: 20px;
  margin-bottom: auto;
  `
const Timer = () => {


  const stratTime = Date.now() / 1625658876; // use UNIX timestamp in seconds
  const endTime = stratTime + 386000; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
  <TimerBox>
    <CountdownCircleTimer
        {...timerProps}
        colors="#6a93ad"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          renderTime("days", getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#6a93ad"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds, 10
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("hours", getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#6a93ad"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds, 10
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#6a93ad"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0, 10
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </TimerBox>
  )

};

export default Timer;
