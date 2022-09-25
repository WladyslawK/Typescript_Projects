import {ChangeEvent, SetStateAction, useState} from "react";

export default {
    title: "Controlled Input Checkbox Select"
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>("")

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return (
        <input value={parentValue} onChange={changeInputHandler}/>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(false)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return (
        <input type="checkbox" onChange={changeHandler} checked={parentValue}/>
    )
}

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string>("0")

    const changeOption = (event: ChangeEvent<HTMLSelectElement>) => setParentValue(event.currentTarget.value)

    return (
        <select value={parentValue} onChange={changeOption}>
            <option value="0">none</option>
            <option value="1">Warsaw</option>
            <option value="2">Krakow</option>
            <option value="3">Gdynia</option>
            <option value="4">Rzeszow</option>
        </select>
    )
}