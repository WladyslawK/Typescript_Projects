import React, {useMemo, useState} from "react";
import style from "../Select/Select.module.css";

export default{
    title: "Use Memo with Selects"
}


export const UseMemoSelectsExample = () => {

    const [cities, SetCities] = useState([
        {id: 1, title: "Warsaw", population: 2300000, country: "Poland"},
        {id: 2, title: "Krakow", population: 1300000, country: "Poland"},
        {id: 3, title: "Gdansk", population: 730000, country: "Poland"},
        {id: 4, title: "Barcelona", population: 100000, country: "Spain"},
        {id: 5, title: "Madrid", population: 1500000, country: "Spain"},
        {id: 6, title: "Valencia", population: 800000, country: "Spain"},
        {id: 7, title: "Verona", population: 500000, country: "Italy"},
        {id: 8, title: "Roma", population: 1400000, country: "Italy"},
        {id: 9, title: "Venice", population: 400000, country: "Italy"},
    ])
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter + 1)


    const filterPoland = useMemo(()=>{
        return cities.filter(city => city.country === "Poland")},[cities])
    const [optionPol, setOptionPol] = useState(1)
    const chooseOptionPol = (id: number) => setOptionPol(id)



    const filterSpain = cities.filter(city => city.country === "Spain")
    const [optionSp, setOptionSp] = useState(filterSpain[0].id)
    const chooseOptionSp = (id: number) => setOptionSp(id)

    const filterItaly = cities.filter(city => city.country === "Italy")
    const [optionIt, setOptionIt] = useState(filterItaly[0].id)
    const chooseOptionIt = (id: number) => setOptionIt(id)


    return (
        <div>
            <span>{counter}</span>
            <button onClick={increment}>Increment</button>
            <Select
                title={"Poland"}
                chosenOption={optionPol}
                options={filterPoland}
                chooseOption={chooseOptionPol}
            />

            <Select
                title={"Spain"}
                chosenOption={optionSp}
                options={filterSpain}
                chooseOption={chooseOptionSp}
            />

            <Select
                title={"Italy"}
                chosenOption={optionIt}
                options={filterItaly}
                chooseOption={chooseOptionIt}
            />

        </div>
    )
}


type CityType = {
    id: number
    title: string
    country: string
    population: number
}

type SelectType = {
    title: string
    chosenOption: number
    options: CityType[]
    chooseOption: (id: number) => void
}

export const SelectMemo: React.FC<SelectType> = (props) => {
    console.log("Select rendered")

    const [collapsed, setCollapsed] = useState(false)

    const initialOption = props.options.find(option => option.id === props.chosenOption)

    const collapsedHandler = () => setCollapsed(true)

    const chooseOptionHandler = (id: number) => {
        props.chooseOption(id)
        setCollapsed(false)
    }

    const optionItems = props.options.map(option =>
        <div
            className={option.id === props.chosenOption
                ? style.option + " " + style.selected
                : style.option}
            key={option.id}
            onClick={() => chooseOptionHandler(option.id)}>
            {option.title}
        </div>)

    return (
        <div className={style.mainContainer}>

            <fieldset className={style.chosenOption} onClick={collapsedHandler}>
                <legend>{props.title}</legend>
                <span className={collapsed ? style.collapsed : ""}>
                    {
                        initialOption && initialOption.title ? initialOption.title : ""
                    }
                </span>
                <img className={collapsed ? style.collapsed : ""}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOhIAG7SyqaIWfCwoHprUtcmRcwc8GFXk1yHEjP77sA&s"
                     alt="arrow"/>
            </fieldset>

            {
                collapsed ?
                    <div className={style.collapseContainer}>
                        {optionItems}
                    </div> :
                    ""
            }
        </div>
    );
}

export const Select = React.memo(SelectMemo)