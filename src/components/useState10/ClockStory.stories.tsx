import {Clock} from "./clock/Clock";

export default {
    title: "lesson10-12/Clock Component",
    component: Clock
}

export const BasicExample = () => <Clock/>

export const AnalogExample = () => <Clock mode={"analog"}/>

export const DigitalClock = () => <Clock mode={"digital"}/>