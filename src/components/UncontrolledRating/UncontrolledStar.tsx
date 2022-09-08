import React, {SetStateAction, MouseEvent} from 'react';
import {RatingValueType} from "../../App";

type StarType = {
    selected: boolean
    changeRating: (value: SetStateAction<RatingValueType>)=> void
    id: RatingValueType
}

export  const UncontrolledStar: React.FC<StarType> = ({selected, changeRating, id}) => {

    const spanStyle = {
        margin: "5px"
    }

    //on click take id claim as if it is the SetStateAction<0 | 1 | 2 | 3 | 4 | 5> type and change local state through the function callback
   /* const onclickHandler = (e: MouseEvent<HTMLSpanElement>) => {
        const id = Number(e.currentTarget.id) as SetStateAction<0 | 1 | 2 | 3 | 4 | 5>
        changeRating(id)
    }*/

    return (
        <>
          {<span onClick={ () => changeRating(id)} style={spanStyle}>{selected ? <strong>star</strong> : "star"}</span> }
        </>
    );
};
