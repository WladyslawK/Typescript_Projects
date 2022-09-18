import React from "react";
import {UncontrolledAccordion, UncontrolledAccordionType} from "./UncontrolledAccordion";
import {ComponentStory} from "@storybook/react";

export default {
    title: "Uncontrolled Components/UNCONTROLLED Accordion",
    component: UncontrolledAccordion
}

const menuItems = [
    {id: 1, title: "link1"},
    {id: 2, title: "link2"},
    {id: 3, title: "link3"},
    {id: 4, title: "link4"},
    {id: 5, title: "link5"},
]

const Template: ComponentStory<typeof UncontrolledAccordion> = (args: UncontrolledAccordionType) => <UncontrolledAccordion {...args}/>

export const COLLAPSED_Accordion = Template.bind({})
COLLAPSED_Accordion.args = {
    accordionTitle: "Menu",
    accordionBody: menuItems,
    collapsed: true
}