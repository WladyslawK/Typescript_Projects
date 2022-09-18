import React, {useState} from "react";
import {OnOff, OnOffType} from "./OnOff";
import {action} from "@storybook/addon-actions";
import {ComponentStory} from "@storybook/react";

export default {
    title: "Controlled Components/Controlled On Off",
    component: OnOff
}

const callback = action("on or off clicked")

const Template: ComponentStory<typeof OnOff> = (args: OnOffType) => <OnOff {...args}/>

export const Onn = Template.bind({})
Onn.args = {
    value: true,
    changeOnOffStatus: callback
}

export const Off = Template.bind({})
Off.args = {
    value: false,
    changeOnOffStatus: callback
}

export const ModeChanging = () => {
    const [status, setStatus] = useState<boolean>(true)
    return(
        <OnOff value={status} changeOnOffStatus={setStatus}/>
    )
}