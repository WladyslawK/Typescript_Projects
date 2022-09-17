import React from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: "UNCONTROLLED Accordion",
    component: UncontrolledAccordion
}

const menuItems = [
    {id: 1, title: "link1"},
    {id: 2, title: "link2"},
    {id: 3, title: "link3"},
    {id: 4, title: "link4"},
    {id: 5, title: "link5"},
]

export  const COLLAPSED_Accordion = () => <UncontrolledAccordion accordionTitle={"Menu"} accordionBody={menuItems} collapsed={true}/>