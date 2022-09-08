import React, {useState} from 'react';


type OnOffType = {
    value: boolean
    changeOnOffStatus: (newValue: boolean) => void
}

export const ControlledOnOff: React.FC<OnOffType> = ({value, changeOnOffStatus}) => {


    const changeIndicatorHandler = (newValue: boolean) => {
        changeOnOffStatus(newValue)
        console.log(value)
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
        backgroundColor: value? "green" : "white",
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
        backgroundColor: value? "white" : "red",
    }

    const circleIndicator = {
        width: "20px",
        margin: "2px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: value? "green" : "red",
    }

    return (
        <div style={containerStyle}>
            <div style={onContainer} onClick={() => changeIndicatorHandler(true)}>On</div>
            <div style={offContainer} onClick={() => changeIndicatorHandler(false)}>Off</div>
            <div style={circleIndicator}></div>
        </div>
    );
};
