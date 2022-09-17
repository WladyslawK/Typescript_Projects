import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

const menuItems = [
    {id: 1, title: "link1"},
    {id: 2, title: "link2"},
    {id: 3, title: "link3"},
    {id: 4, title: "link4"},
    {id: 5, title: "link5"},
]

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [accordionValue, setAccordionValue] = useState<boolean>(false)
    const [onOffValue, setOnOffValue] =useState<boolean>(false)
    /*const changeRatingCallback = (newRating: RatingValueType) => setRatingValue(newRating)*/


    return (
        <div>
            {/*<Accordion accordionTitle={"Menu"} accordionBody={menuItems} collapsed={false}/>
        <Accordion accordionTitle={"Menu1"} accordionBody={menuItems} collapsed={true}/>*/}

            <h4>Controlled Accordion according to the BLL UI concept</h4>
            <Accordion title={"Controlled Accordion"} accordionBody={menuItems} collapsed={accordionValue} onClickChangeCollapsed={setAccordionValue}/>

            <h4>Uncontrolled Accordion with local state</h4>
            <UncontrolledAccordion accordionTitle={"Uncontrolled Menu"} accordionBody={menuItems} collapsed={true}/>

            <h4>Controlled Rating according to BLL and UI concepts</h4>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <h4>UnControlled Rating with local useState manager</h4>
            <UncontrolledRating value={3}/>


            <h4>Uncontrolled OnOff</h4>
            <UncontrolledOnOff value={false}/>
            <UncontrolledOnOff value={true}/>

            <h4>Controlled OnOff </h4>
            <OnOff value={onOffValue} changeOnOffStatus={setOnOffValue}/>
        </div>
    );
}

export default App;
