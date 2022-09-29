import React, {KeyboardEvent, useEffect, useState} from 'react';
import style from "./DefaultSelect.module.css"

type DefaultSelectType = {
    value?: string
    valueChange: (newValue: string) => void
    options: Array<{ value: string, title: string }>

}

export const DefaultSelectMemo: React.FC<DefaultSelectType> = ({valueChange, options, value}) => {

    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(value)

    const showItemsHandler = () => setActive(!active)

    const valueChangeHandler = (newValue: string) => {
        valueChange(newValue)
        setActive(!active)
    }

    useEffect(() => {
        setHoveredElement(value)
    }, [value])

    const onMouseHoverHandler = (value: string) => setHoveredElement(value)

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < options.length; i++) {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                if(options[i].value === hoveredElement){
                    const pretendValue = e.key === "ArrowDown" ? options[i + 1] : options[i - 1]
                    if (pretendValue) {
                        valueChange(pretendValue.value)
                        return
                    }
                }


            }
            if(e.key === "Escape" || e.key === "Enter"){
                setActive(false)
                return;
            }
        }
        if(!hoveredElement){
            return setHoveredElement(options[0].value)
        }

    }

    const chosenOption = options.find(option => option.value === value)

    return (

        <div className={style.select} tabIndex={0} onKeyUp={onKeyUpHandler}>
            <span className={style.main} onClick={showItemsHandler}>
                {chosenOption && chosenOption.title}
            </span>
            <div className={style.items}>
                {
                    active ?
                        options.map((option, index) =>
                            <div
                                onMouseEnter={() => onMouseHoverHandler(option.value)}
                                className={hoveredElement === option.value ? style.item + " " + style.itemHovered : ""}
                                key={index}
                                onClick={() => valueChangeHandler(option.value)}>{option.title}
                            </div>) :
                        ""
                }
            </div>

        </div>
    );
};

export  const DefaultSelect = React.memo(DefaultSelectMemo)
