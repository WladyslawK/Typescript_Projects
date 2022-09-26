import React, {useState} from "react";
import {Accordion, AccordionType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {ComponentStory} from "@storybook/react";

export default {
    title: "Controlled Components/Controlled Accordion",
    component: Accordion
}

const menuBody = [
    {id: 1, title: "Google"},
    {id: 2, title: "Sii"},
    {id: 3, title: "Apple"},
    {id: 4, title: "Samsung"},
]

const callback =  () => {
    action("accordion mode change fired")
}

const menuItemClicked = (id: number) => {debugger
    console.log(`Some item has been clicked ${id}`)
}

const Template: ComponentStory<typeof Accordion> = (args: AccordionType) => <Accordion {...args} />


export const CollapseAccordion = Template.bind({})
CollapseAccordion.args = {
    title: "Menu",
    onClickChangeCollapsed: callback,
    collapsed: true,
    accordionBody: menuBody
}

export const ChangeAccordionCollapse = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return <Accordion title={"Menu"} collapsed={collapsed} callback={menuItemClicked} onClickChangeCollapsed={() => setCollapsed(!collapsed)}
                      accordionBody={menuBody}/>
}