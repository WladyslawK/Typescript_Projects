import React, {useState} from 'react';
import style from "./Select.module.css"

type OptionType = {
    id: number
    title: string
}

type SelectType = {
    title: string
    chosenOption: number
    options: Array<OptionType>
    chooseOption: (id: number) => void
}

export const Select: React.FC<SelectType> = (props) => {

    const [collapsed, setCollapsed] = useState(false)

    const initialOption = props.options.find(option => option.id === props.chosenOption)

    const collapsedHandler = () => setCollapsed(true)

    const chooseOptionHandler = (id: number) => {
        props.chooseOption(id)
        setCollapsed(false)
    }

    const optionItems = props.options.map(option => <div className={option.id === props.chosenOption ?  style.option + " " + style.selected : style.option} key={option.id} onClick={() => chooseOptionHandler(option.id)}>{option.title}</div>)

    return (
        <div className={style.mainContainer}>

            <fieldset className={style.chosenOption} onClick={collapsedHandler}><legend>{props.title}</legend><span className={collapsed ? style.collapsed : ""}>{initialOption && initialOption.title ? initialOption.title : ""}</span>
                <img className={collapsed ? style.collapsed : ""} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOhIAG7SyqaIWfCwoHprUtcmRcwc8GFXk1yHEjP77sA&s" alt="arrow"/></fieldset>
            {collapsed ?
                <div className={style.collapseContainer}>
                        {optionItems}
                </div> :
                ""}
        </div>
    );
};