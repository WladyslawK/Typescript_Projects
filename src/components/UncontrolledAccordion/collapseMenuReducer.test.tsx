import React, {useReducer} from "react";
import {collapsedMenuReducer, collapsedMenuReducerAC} from "./UncontrolledAccordion";
import exp from "constants";

test("Collapsed value should changed to opposite", ()=> {
    //data

    const collapsed = false

    //action
    const beforeCall = collapsed
    const afterCall = collapsedMenuReducer(collapsed, collapsedMenuReducerAC(collapsed))

    //expectation
    expect(beforeCall).toBe(false)
    expect(beforeCall).not.toBe(afterCall)
    expect(!beforeCall).toBe(afterCall)

})