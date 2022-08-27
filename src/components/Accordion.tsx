import React from 'react';

type AccordionBodyType = {
    id: number
    title: string
}

type AccordionType = {
    accordionTitle: string
    accordionBody: Array<AccordionBodyType>
}

export const Accordion: React.FC<AccordionType> = ({accordionTitle, accordionBody }) => {

    type AccordionTitleType = {
        title: string
    }

    const AccordionTitle: React.FC<AccordionTitleType> = ({title}) => {
        return (
            <>
                {title}
            </>
        )
    }

    type AccordionBodyMenuType = {
        menuItems: Array<AccordionBodyType>
    }

    const AccordionBody: React.FC<AccordionBodyMenuType> = ({menuItems}) => {

        const accoordionBodyElements = menuItems.map(i => <li key={i.id}>{i.title}</li>)

        return (
            <ul>
                {accoordionBodyElements}
            </ul>
        )
    }


    return (
        <>
            <AccordionTitle title={accordionTitle}/>
            <AccordionBody menuItems={accordionBody}/>
        </>
    );
};
