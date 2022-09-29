import React, {SetStateAction, useState} from 'react';
import {UncontrolledStar} from "./UncontrolledStar";
import {RatingValueType} from "../../App";


export type RatingType = {
    /**
     * value that indicates the number of bold stars
     */
    value: RatingValueType
}

export const UncontrolledRatingMemo: React.FC<RatingType> = ({value}) => {

    const [starValue, setStarValue] = useState<RatingValueType>(value)

    //callback function and SetStateAction<0 | 1 | 2 | 3 | 4 | 5> type for local state change function
    const changeRatingCallback = (id: SetStateAction<RatingValueType>) => setStarValue(id)


    const arrayStars = []
    for(let i = 1; i < 6; i++){
        arrayStars.push(<UncontrolledStar selected={starValue > i-1} changeRating={changeRatingCallback} id={i as RatingValueType}/>)
    }

   return (
        <div>
            {arrayStars}
        </div>
    )
};

export const UncontrolledRating = React.memo(UncontrolledRatingMemo)
