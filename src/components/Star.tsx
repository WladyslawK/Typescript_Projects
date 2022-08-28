import React from 'react';
import s from "./Star.module.css"

type StarType = {
    selected: boolean
}

export  const Star: React.FC<StarType> = ({selected}) => {
    return (
        <>
          {selected && <span className={s.container}><strong>star</strong></span>}
          {!selected && <span className={s.container}>star</span>}
        </>
    );
};
