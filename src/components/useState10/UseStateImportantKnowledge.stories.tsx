import Rect, {memo, useMemo, useState} from "react";

export default {
    title: "lesson10/UseState Important Knowledge"
}

const difCounting = () => {
    console.log("Diffcult counting")
    return 0
}

const change = (state: number) => {
    return state + 1
}


export const Counter = () => {
    console.log("Counter render")
    //const initValue = useMemo(difCounting,[])

    const [counter, setCounter] = useState(difCounting)
    const incrementHandler = () => setCounter(change)

    return (
        <div>
            <span>{counter}</span>
            <button onClick={incrementHandler}>Increment</button>
        </div>)
}