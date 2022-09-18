import React from 'react';
import {Star} from "../Star";
import {RatingValueType} from "../../App";

export type RatingType = {
    /**
     * value indicates the number of bold stars
     */
    value: RatingValueType
    /**
     * func to change the number of bold stars
     * @param rating
     */
    onClick: (rating: RatingValueType) => void
}

export const Rating: React.FC<RatingType> = ({value, onClick}) => {

    const arrStars = []
    for(let i = 1; i < 6; i++){
        arrStars.push(<Star id={i as RatingValueType} selected={value >= i} onClick={onClick}/>)
    }
    return (
        <>
            <div>
                {arrStars}
            </div>
        </>


    )
};
