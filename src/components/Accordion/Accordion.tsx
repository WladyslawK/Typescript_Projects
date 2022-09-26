import React from 'react';

type AccordionBodyType = {
    id: number
    title: string
}

type AccordionTitleType = {
    title: string
    collapsed: boolean
    onClickChangeCollapsed?: (newValue: boolean) => void
}

export type AccordionType = {
    /**
     * title of the menu
     */
    title: string
    /**
     * value that defines whether the menu is collapsed
     */
    collapsed: boolean
    /**
     * not required function that changes the value collapsed onClick
     * @param newValue
     */
    onClickChangeCollapsed?: (newValue: boolean) => void
    /**
     * Elements will be shown when Accordion is collapsed
     */
    accordionBody: Array<AccordionBodyType>
    callback: (id: number) => void
}

export const Accordion: React.FC<AccordionType> = (props) => {



    const AccordionTitle: React.FC<AccordionTitleType> = ({title, onClickChangeCollapsed, collapsed}) => {
        return (
            <div onClick={() =>{onClickChangeCollapsed && onClickChangeCollapsed(!collapsed)}}>
                {title}
            </div>
        )
    }

    type AccordionBodyMenuType = {
        menuItems: Array<AccordionBodyType>
        callback: (id: number) => void
    }

    const AccordionBody: React.FC<AccordionBodyMenuType> = ({menuItems,callback}) => {

        const accordionBodyElements = menuItems.map(item => <li key={item.id} onClick={() => callback(item.id)}>{item.title}</li>)

        return (
            <ul>
                {accordionBodyElements}
            </ul>
        )
    }

    return (
        <>
            <AccordionTitle title={props.title} onClickChangeCollapsed={props.onClickChangeCollapsed  && props.onClickChangeCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody menuItems={props.accordionBody} callback={props.callback}/>}
        </>
    );


};
