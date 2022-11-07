import {useEffect, useState} from "react";

export default {
    title: "lesson10/UseEffect"
}

export const UseEffectCounterExample = () => {

    const [counter, setCounter] = useState(0)
    const [fakeCounter, setFakeCounter] = useState(0)

    useEffect(() => {
        console.log("called only once (like componentDidMount in class Component)")
    }, [])

    useEffect(() => {
        console.log("called only when dependency has been changed ([counter])")
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        console.log("called all the time (all useEffects called after jsx returned)")

        //side effects
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = "User "
    })


    return (
        <div>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <br/>
            <span>{fakeCounter}</span>
            <button onClick={() => setFakeCounter(fakeCounter + 1)}>IncrFakeCounter</button>
        </div>
    )
}

export const UseEffectSetInterval = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            console.log("set title called")
            document.title = counter.toString()
        }, 1000)
    }, [])

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("tick: ", counter)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return (
        <div>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>Incr</button>
        </div>
    )
}