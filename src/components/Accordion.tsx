import React from 'react';

type AccordionBodyType = {
    id: number
    title: string
}

type AccordionType = {
    accordionTitle: string
    accordionBody: Array<AccordionBodyType>
    collapsed: boolean
}

export const Accordion: React.FC<AccordionType> = ({accordionTitle, accordionBody, collapsed}) => {

    type AccordionTitleType = {
        title: string
    }

    const AccordionTitle: React.FC<AccordionTitleType> = ({title}) => {
        return (
            <div>
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
            <AccordionTitle title={accordionTitle}/>
            {!collapsed && <AccordionBody menuItems={accordionBody}/>}
        </>
    );


};
