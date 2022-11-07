import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type ClockType = {
    mode?: "analog" | "digital"
}

const setTwoDigitTime = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<ClockType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("TIK")
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    })


    let view;
    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }


    return (
        <div>
            {
                view
                /*props.mode === "analog" ?
                    <>ANALOG</> :
                    <div>
                        <span>{setTwoDigitTime(date.getHours())}</span>:
                        <span>{setTwoDigitTime(date.getMinutes())}</span>:
                        <span>{setTwoDigitTime(date.getSeconds())}</span>
                    </div>*/
            }
        </div>
    );
};


export type ClockViewType = {
    date: Date
}



