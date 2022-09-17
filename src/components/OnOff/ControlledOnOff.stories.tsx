import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "Controlled On Off",
    component: OnOff
}

const callback = action("on or off clicked")

export const Onn = () => <OnOff value={true} changeOnOffStatus={callback}/>
export const Off = () => <OnOff value={false} changeOnOffStatus={callback}/>
export const ModeChanging = () => {
    const [status, setStatus] = useState<boolean>(true)
    return(
        <OnOff value={status} changeOnOffStatus={setStatus}/>
    )
}