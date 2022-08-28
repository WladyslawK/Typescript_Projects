import React from 'react';
import s from "./OnOff.module.css"

type OnOffType = {
    value: boolean
}

export const OnOff: React.FC<OnOffType> = ({value}) => {
    return (
        <div className={s.container}>
            {value && <div className={`${s.container__On} ${s.container__indicator}`}>On</div>}
            {!value && <div className={`${s.container__Off} ${s.container__indicator}`}>Off</div>}

            {value && <div className={`${s.container__On} ${s.container__circleIndicator}`}></div>}
            {!value && <div className={`${s.container__Off} ${s.container__circleIndicator}`}></div>}
        </div>
    );
};
