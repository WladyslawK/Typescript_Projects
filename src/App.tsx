import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

const menuItems = [
    {id: 1, title: "link1"},
    {id: 2, title: "link2"},
    {id: 3, title: "link3"},
    {id: 4, title: "link4"},
    {id: 5, title: "link5"},
]



function App() {
  return (
      <div>
        <Accordion accordionTitle={"Menu"} accordionBody={menuItems}/>
        <Accordion accordionTitle={"Menu1"} accordionBody={menuItems}/>
          <Rating value={0}/>
          <Rating value={1}/>
          <Rating value={2}/>
          <Rating value={3}/>
          <Rating value={4}/>
          <Rating value={5}/>
      </div>
  );
}

export default App;
