import {DefaultSelect} from "./DefaultSelect";
import {useState} from "react";

export default {
    title: "Default Select",
    component: DefaultSelect
}



export const BaseExample = () => {

    const [value, setValue] =useState("2")

    const changeValue = (newValue: string) => setValue(newValue)

    return (
        <DefaultSelect valueChange={changeValue} options={[
        {value: "1", title: "Warsaw"},
        {value: "2", title: "Krakow"},
        {value: "3", title: "Rzeszow"}]}
                       value={value}

    />)
}