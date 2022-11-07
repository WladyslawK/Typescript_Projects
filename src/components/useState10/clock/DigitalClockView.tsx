import React from "react";
import {ClockViewType} from "./Clock";

const setTwoDigitTime = (num: number) => num < 10 ? "0" + num : num

export const DigitalClockView: React.FC<ClockViewType> = ({date}) => {
    return (
        <div>
            <span>{setTwoDigitTime(date.getHours())}</span>:
            <span>{setTwoDigitTime(date.getMinutes())}</span>:
            <span>{setTwoDigitTime(date.getSeconds())}</span>
        </div>)
}