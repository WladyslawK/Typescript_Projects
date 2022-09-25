import React, {ChangeEvent, SetStateAction, useRef, useState} from 'react';

export default {
    title: "Test Controlled and Uncontrolled Components",

}

export const TrackValueOfUncontrooledInput = () => {
    const [value, setValue] = useState("")

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)
    return (<><input onChange={changeValue} type={"text"}/>-{value}</>)
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    //const reference = React.createRef<HTMLInputElement>()
    const reference = useRef<HTMLInputElement>(null)

    const [value, setValue] = useState("")

    const saveHandler = () => setValue(reference.current?.value as SetStateAction<string>)

    return (<><input ref={reference}/> <button onClick={saveHandler}>save</button> -actual value: {value} </>)
}