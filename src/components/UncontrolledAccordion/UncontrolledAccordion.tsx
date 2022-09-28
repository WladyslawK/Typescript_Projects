import React, {useReducer, useState} from 'react';

type AccordionBodyType = {
    id: number
    title: string
}

export type UncontrolledAccordionType = {
    /**
     * title of the Accordion menu
     */
    accordionTitle: string
    /**
     * menu items
     */
    accordionBody: Array<AccordionBodyType>
    /**
     * boolean value that defines if menu is collapsed or not
     */
    collapsed: boolean
}

export function collapsedMenuReducer(state: boolean, action: collapsedMenuReducerACType){
    if(action.type === "UPDATE-COLLAPSED VALUE"){
        return !action.payload.collapsed
    }
    return state
}

type collapsedMenuReducerACType = ReturnType<typeof collapsedMenuReducerAC>
export  const collapsedMenuReducerAC = (collapsed: boolean) => {
    return ({
        type: "UPDATE-COLLAPSED VALUE",
        payload: {
            collapsed: collapsed
        }
    }) as const
}


export const UncontrolledAccordion: React.FC<UncontrolledAccordionType> = ({accordionTitle, accordionBody, collapsed}) => {

    //const [collapsedMenu, setCollapsedMenu] = useState(collapsed)
    const [collapsedMenu, collapsedMenuDispatch] = useReducer(collapsedMenuReducer, collapsed)
    const changeCollapsedCallback = (newValue: boolean) => {
        //setCollapsedMenu(newValue)
        collapsedMenuDispatch(collapsedMenuReducerAC(newValue))
    }

    type AccordionTitleType = {
        title: string
        changeCollapsedMenu: (newValue: boolean) => void
        collapsedValue: boolean
    }

    const AccordionTitle: React.FC<AccordionTitleType> = ({title, changeCollapsedMenu, collapsedValue}) => {

        const changeCollapsedValueHandler = () => {
            changeCollapsedMenu(collapsedValue)
        }

        return (
            <div onClick={changeCollapsedValueHandler}>
                {title}
            </div>
        )
    }

    type AccordionBodyMenuType = {
        menuItems: Array<AccordionBodyType>
    }

    const AccordionBody: React.FC<AccordionBodyMenuType> = ({menuItems}) => {

        const accordionBodyElements = menuItems.map(i => <li key={i.id}>{i.title}</li>)

        return (
            <ul>
                {accordionBodyElements}
            </ul>
        )
    }

    return (
        <>
            <AccordionTitle title={accordionTitle} collapsedValue={collapsedMenu} changeCollapsedMenu={changeCollapsedCallback}/>
            {collapsedMenu && <AccordionBody menuItems={accordionBody}/>}
        </>
    );


};
