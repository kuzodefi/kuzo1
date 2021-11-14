/* eslint-disable no-bitwise */

import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styled from 'styled-components'

const CountdownWrapper = styled.a`
  display: flex;
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding-top: 40px;
  width: 800px;
  margin: 0 auto 32px;
`

const EstimatedText = styled.div`
  text-align: center;
`

const BlockNumber = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
}

const renderTime = (dimension, time) => (
  <div>
    <div style={{ fontSize: 32 }}>{time}</div>
    <div>{dimension}</div>
  </div>
)

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0
const getTimeMinutes = (time: number) => ((time % hourSeconds) / minuteSeconds) | 0
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0
const getTimeDays = (time: number) => (time / daySeconds) | 0

export default function Countdown() {
  const stratTime = Date.now()
  const endTime = new Date('09/11/2021 22:59:00 UTC')

  const remainingSeconds = (endTime.getTime() - stratTime) / 1000
  const days = Math.ceil(remainingSeconds / daySeconds)
  const daysDuration = days * daySeconds

  return (
    <>
      <CountdownWrapper href="https://cchain.explorer.avax.network/blocks" target="_blank" rel="noopener noreferrer">
        <CountdownCircleTimer
          {...timerProps}
          colors="#283149"
          duration={daysDuration}
          initialRemainingTime={remainingSeconds}
        >
          {({ elapsedTime }) => renderTime('days', getTimeDays(daysDuration - elapsedTime))}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors="#283149"
          duration={daySeconds}
          initialRemainingTime={remainingSeconds % daySeconds}
          onComplete={(totalElapsedTime) => [remainingSeconds - totalElapsedTime > hourSeconds, 0]}
        >
          {({ elapsedTime }) => renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors="#283149"
          duration={hourSeconds}
          initialRemainingTime={remainingSeconds % hourSeconds}
          onComplete={(totalElapsedTime) => [remainingSeconds - totalElapsedTime > minuteSeconds, 0]}
        >
          {({ elapsedTime }) => renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors="#283149"
          duration={minuteSeconds}
          initialRemainingTime={remainingSeconds % minuteSeconds}
          onComplete={(totalElapsedTime) => [remainingSeconds - totalElapsedTime > 0, 0]}
        >
          {({ elapsedTime }) => renderTime('seconds', getTimeSeconds(elapsedTime))}
        </CountdownCircleTimer>
      </CountdownWrapper>
      <EstimatedText>
        <p style={{ color: 'white', marginBottom: 16 }}>
          <strong>{endTime.toString()}</strong>
        </p>
        <BlockNumber>
          <a href="https://cchain.explorer.avax.network/blocks" target="_blank" rel="noopener noreferrer">
            Farming starts on Block #4,197,302 | DISCLAIMER: Click for accurate farm start timing, timer may not be accurate due to volatile block counts on AVAX. 
          </a>
        </BlockNumber>
      </EstimatedText>
    </>
  )
}
