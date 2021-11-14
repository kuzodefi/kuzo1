import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Heading, Text} from "@pancakeswap-libs/uikit";

const ClockDiv = styled.div`
font-family: sans-serif;
color: #fbf8f8;
display: inline-block;
font-weight: 100;
text-align: center;
font-size: 30px;
`

const ClockTimeSide = styled.div`
padding: 10px;
border-radius: 3px;
background: #3E0880;
display: inline-block;
margin-right: 10px;
`

const ClockTimeSideSpan = styled.span`
border-radius: 3px;
background: #3E0880;
display: inline-block;
margin-right: 10px;
`

const ClockTimeSideLabel = styled.span`
border-radius: 3px;
display: inline-block;
padding-top: 5px;
font-size: 16px;
`

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}


const CountDown = () => {
    const deadline = 'SMon Nov 15 2021 04:53:06 GMT-0500 (EST)';
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(deadline));
    const [show, setShow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const temp = getTimeRemaining(deadline);
            /* eslint-disable */
            setTimeRemaining(timeRemaining => temp);
            if (temp.total <= 0) {
                setShow(show => false);
            } else {
                setShow(show => true);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        show ?
            <div>   
                <div>
                    <Heading as="h2" size="lg" mb="20px" color="white"
                             style={{alignContent: "center", textAlign: "center" }}>Farm will start from block: <a style={{marginLeft:"5px", color:"#ffffff"}} href="https://ftmscan.com/block/countdown/18800147">#22111110</a></Heading>
                    <div style={{alignContent: "center", textAlign: "center"}}>
                        
                        <ClockDiv>
                            <ClockTimeSide>
                                <ClockTimeSideSpan className="days">{timeRemaining.days}</ClockTimeSideSpan>
                                <ClockTimeSideLabel>Days</ClockTimeSideLabel>
                            </ClockTimeSide>
                            <ClockTimeSide>
                                <ClockTimeSideSpan className="hours">{timeRemaining.hours}</ClockTimeSideSpan>
                                <ClockTimeSideLabel>Hours</ClockTimeSideLabel>
                            </ClockTimeSide>
                            <ClockTimeSide>
                                <ClockTimeSideSpan className="minutes">{timeRemaining.minutes}</ClockTimeSideSpan>
                                <ClockTimeSideLabel>Min</ClockTimeSideLabel>
                            </ClockTimeSide>
                            <ClockTimeSide>
                                <ClockTimeSideSpan className="seconds">{timeRemaining.seconds}</ClockTimeSideSpan>
                                <ClockTimeSideLabel>Sec</ClockTimeSideLabel>
                            </ClockTimeSide>
                        </ClockDiv>
                    </div>
                </div>
            </div>
            : <div>
            </div>
    )
}

export default CountDown