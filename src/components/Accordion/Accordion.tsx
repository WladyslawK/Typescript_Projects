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
}

export const Accordion: React.FC<AccordionType> = ({title, collapsed, onClickChangeCollapsed, accordionBody}) => {



    const AccordionTitle: React.FC<AccordionTitleType> = ({title, onClickChangeCollapsed, collapsed}) => {
        return (
            <div onClick={() =>{onClickChangeCollapsed && onClickChangeCollapsed(!collapsed)}}>
                {title}
            </div>
        )
    }

    type AccordionBodyMenuType = {
        menuItems: Array<AccordionBodyType>
    }

    const AccordionBody: React.FC<AccordionBodyMenuType> = ({menuItems}) => {

        const accordionBodyElements = menuItems.map(item => <li key={item.id}>{item.title}</li>)

        return (
            <ul>
                {accordionBodyElements}
            </ul>
        )
    }

    return (
        <>
            <AccordionTitle title={title} onClickChangeCollapsed={onClickChangeCollapsed  && onClickChangeCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody menuItems={accordionBody}/>}
        </>
    );


};
