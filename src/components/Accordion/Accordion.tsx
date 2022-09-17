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

type AccordionType = {
    title: string
    collapsed: boolean
    onClickChangeCollapsed?: (newValue: boolean) => void
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
