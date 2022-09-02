import React, {SetStateAction, useState} from 'react';
import {UncontrolledStar} from "./UncontrolledStar";


type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UncontrolledRating: React.FC<RatingType> = ({value}) => {

    const [starValue, setStarValue] = useState(value)

    //callback function and SetStateAction<0 | 1 | 2 | 3 | 4 | 5> type for local state change function
    const changeRatingCallback = (id: SetStateAction<0 | 1 | 2 | 3 | 4 | 5>) => setStarValue(id)


    const arrayStars = []
    for(let i = 1; i < 6; i++){
        arrayStars.push(<UncontrolledStar selected={starValue > i-1} changeRating={changeRatingCallback} id={String(i)}/>)
    }

   return (
        <div>
            {arrayStars}
        </div>
    )
};
