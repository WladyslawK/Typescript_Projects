import React from "react";
import {RatingType, UncontrolledRating} from "./UncontrolledRating";
import {ComponentStory} from "@storybook/react";

export default {
    title: "Uncontrolled Components/UNCONTROLLED Rating",
    component: UncontrolledRating
}

const Template: ComponentStory<typeof UncontrolledRating> = (args: RatingType) => <UncontrolledRating {...args}/>

export const Rating = Template.bind({})
Rating.args = {
    value: 4
}