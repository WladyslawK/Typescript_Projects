import React, {useState} from "react";
import {Accordion, AccordionType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {ComponentStory} from "@storybook/react";

export default {
    title: "Controlled Components/Controlled Accordion",
    component: Accordion
}

const menuBody = [
    {id: 1, title: "link1"},
    {id: 2, title: "link2"},
    {id: 3, title: "link3"},
    {id: 4, title: "link4"},
]

const callback =  () => {
    action("accordion mode change fired")
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

    return <Accordion title={"Menu"} collapsed={collapsed} onClickChangeCollapsed={() => setCollapsed(!collapsed)}
                      accordionBody={menuBody}/>
}