import React from "react";
import {ClockViewType} from "./Clock";
import styles from "./AnalogClockView.module.css"

export const AnalogClockView: React.FC<ClockViewType> = ({date}) => {

    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    return (
        <div className={styles.clock}>
            <div className={styles["analog-clock"]}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
            </div>
        </div>)
}