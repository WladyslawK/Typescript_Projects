import {Select} from "./Select";
import {useState} from "react";

export default {
    title: "Controlled Components/Controlled Select"
}

const menuItems = [
    {id: 1, title: "Warsaw"},
    {id: 2, title: "Krakow"},
    {id: 3, title: "Rzeszow"},
    {id: 4, title: "Milan"},
    {id: 5, title: "Madrid"},
]

export const CollapsedSelect = () => {

    const [option, setOption] = useState(0)

    return (
        <Select options={menuItems} chooseOption={setOption} chosenOption={option} title={"Towns"}/>
    )
}