import React from 'react';
import s from "./Star.module.css"
import {RatingValueType} from "../App";

type StarType = {
    id: RatingValueType
    selected: boolean
    onClick: (newRating: RatingValueType) => void
}

export  const Star: React.FC<StarType> = ({id, selected, onClick}) => {
    return (
        <>
          {<span onClick={() => onClick(id)} className={s.container}> {selected ? <strong>star </strong>: "star "}</span>}
        </>
    );
};
