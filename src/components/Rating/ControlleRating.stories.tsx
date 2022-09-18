import React, {useState} from "react";
import {Rating, RatingType} from "./Rating";
import {RatingValueType} from "../../App";
import {ComponentStory} from "@storybook/react";
import {OnOffType} from "../OnOff/OnOff";


export default {
    title: "Controlled Components/Rating stories",
    component: Rating,
}

const Template: ComponentStory<typeof Rating> = (args: RatingType) => <Rating {...args}/>

export const EmptyRating = Template.bind({})
EmptyRating.args = {
    value: 0
}

/*
export const EmptyRating = () => <Rating value={0} onClick={x=>x}/>
export const Rating1 = () => <Rating value={1} onClick={x=>x}/>
export const Rating2 = () => <Rating value={2} onClick={x=>x}/>
export const Rating3 = () => <Rating value={3} onClick={x=>x}/>
export const Rating4 = () => <Rating value={4} onClick={x=>x}/>
export const Rating5 = () => <Rating value={5} onClick={x=>x}/>
*/

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}