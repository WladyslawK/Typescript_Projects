import React, {useState} from 'react';
import s from "./OnOff.module.css"

export type OnOffType = {
    /**
     * value defines if indicator is on or off
     */
    value: boolean
}

export const UncontrolledOnOff: React.FC<OnOffType> = ({value}) => {

    const [indicatorValue, setIndicatorValue] = useState(value)

    const changeIndicatorHandler = (newValue: boolean) => {
        setIndicatorValue(newValue)
    }

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        marginBottom: "5px",
    }

    const onContainer = {
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
        width: "50px",
        height: "20px",
        borderRadius: "6px",
        padding: "2px",
        margin: "2px",
        backgroundColor: indicatorValue? "green" : "white",
    }

    const offContainer = {
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
        width: "50px",
        height: "20px",
        borderRadius: "6px",
        padding: "2px",
        margin: "2px",
        backgroundColor: indicatorValue? "white" : "red",
    }

    const circleIndicator = {
        width: "20px",
        margin: "2px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: indicatorValue? "green" : "red",
    }

    return (
        <div style={containerStyle}>
            <div style={onContainer} onClick={() => changeIndicatorHandler(true)}>On</div>
            <div style={offContainer} onClick={() => changeIndicatorHandler(false)}>Off</div>
            <div style={circleIndicator}></div>
        </div>
    );
};
