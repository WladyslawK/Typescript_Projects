import React, {SetStateAction, MouseEvent} from 'react';

type StarType = {
    selected: boolean
    changeRating: (value: SetStateAction<0 | 1 | 2 | 3 | 4 | 5>)=> void
    id: string
}

export  const UncontrolledStar: React.FC<StarType> = ({selected, changeRating, id}) => {

    const spanStyle = {
        margin: "5px"
    }

    //on click take id claim as if it is the SetStateAction<0 | 1 | 2 | 3 | 4 | 5> type and change local state through the function callback
    const onclickHandler = (e: MouseEvent<HTMLSpanElement>) => {
        const id = Number(e.currentTarget.id) as SetStateAction<0 | 1 | 2 | 3 | 4 | 5>
        changeRating(id)
    }

    return (
        <>
          {selected ? <span id={id} onClick={onclickHandler} style={spanStyle}><strong>star</strong></span> : <span id={id} onClick={onclickHandler} style={spanStyle}>star</span>}
        </>
    );
};
