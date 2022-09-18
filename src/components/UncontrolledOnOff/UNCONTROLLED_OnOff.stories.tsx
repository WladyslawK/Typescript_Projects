import React, {useState} from "react";
import {OnOffType, UncontrolledOnOff} from "./UncontrolledOnOff";
import {ComponentStory} from "@storybook/react";

export default  {
    title: "Uncontrolled Components/UNCONTROLLED On Off",
    component: UncontrolledOnOff
}

const Template: ComponentStory<typeof UncontrolledOnOff> = (args: OnOffType) => <UncontrolledOnOff {...args}/>

export const On = Template.bind({})
On.args = {
  value: true
}

export const Off = Template.bind({})
Off.args = {
    value: false
}
