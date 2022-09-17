import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Controlled Accordion",
    component: Accordion
}

const menuBody = [
    {id: 1, title: "link1"},
    {id: 2, title: "link2"},
    {id: 3, title: "link3"},
    {id: 4, title: "link4"},
]

const callback = action("accordion mode change fired")

export const CollapseAccordion = () => <Accordion title={"Menu"} collapsed={true} onClickChangeCollapsed={callback} accordionBody={menuBody}/>

export const UnCollapseAccordion = () => <Accordion title={"Menu"} collapsed={false} onClickChangeCollapsed={callback} accordionBody={menuBody}/>

export const ChangeAccordionCollapse = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return <Accordion title={"Menu"} collapsed={collapsed} onClickChangeCollapsed={() =>setCollapsed(!collapsed)} accordionBody={menuBody}/>
}