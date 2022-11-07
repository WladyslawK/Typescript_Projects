import React, {useEffect, useState} from 'react';

const setTwoDigitTime = (num: number) => num < 10 ? "0" + num : num

export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(()=> {
            console.log("TIK")
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    })



    return (
        <div>
            <span>{setTwoDigitTime(date.getHours())}</span>:
            <span>{setTwoDigitTime(date.getMinutes())}</span>:
            <span>{setTwoDigitTime(date.getSeconds())}</span>
        </div>
    );
};
