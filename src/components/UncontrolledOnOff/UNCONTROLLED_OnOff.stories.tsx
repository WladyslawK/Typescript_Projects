import React, {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default  {
    title: "UNCONTROLLED On Off",
    component: UncontrolledOnOff
}

export const On = () => <UncontrolledOnOff value={true}/>
export const Off = () => <UncontrolledOnOff value={false}/>
