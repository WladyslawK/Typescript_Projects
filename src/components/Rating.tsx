import React from 'react';
import s from "./Rating.module.css"

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props:RatingType) => {

    if (props.value === 1) {
        return (
            <div className={s.container}>
                <span><strong>star</strong></span>
                <span>star</span>
                <span>star</span>
                <span>star</span>
                <span>star</span>
            </div>
        )
    }
    else if (props.value === 2) {
        return (
            <div className={s.container}>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
                <span>star</span>
                <span>star</span>
                <span>star</span>
            </div>
        )
    }
    else if (props.value === 3) {
        return (
            <div className={s.container}>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
                <span>star</span>
                <span>star</span>
            </div>
        )
    }
    else if (props.value === 4) {
        return (
            <div className={s.container}>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
                <span>star</span>
            </div>
        )
    }
    else if (props.value === 5) {
        return (
            <div className={s.container}>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
                <span><strong>star</strong></span>
            </div>
        )
    }
    else return (
        <div className={s.container}>
            <span>star</span>
            <span>star</span>
            <span>star</span>
            <span>star</span>
            <span>star</span>
        </div>
    )
};
