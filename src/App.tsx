import React, {FC, useState} from 'react';
import './App.css';
import ptData from './PTable.json'


/*
  This typescript ReactJS demo loads an array storing the Periodic Table of elements from a locally stored JSON.
  The elements are then loaded in the correct layout using a CSS grid.
  When an element is hovered over, information about the element will display.

  Happy Coding!
*/

interface Element {
  number: number,
  atomic_mass: number,
  name: string,
  symbol: string,
  category: string,
  melt: number,
  electron_configuration: string,
  xpos: number,
  ypos: number,
  summary: string
}

const App: FC = () => {

  const [hoveredElem, setElem] = useState<number>(-1) 

  const elements = ptData.elements as Element[]

  return (
    <div className="App">
      <header className="App-header">
        {elements.map((element) => {
          return <ElementCard elem = {element} setElem = {setElem}/>
        })}

        <h1 className = "Title">The Periodic Table of Elements</h1>

        {hoveredElem >= 0 && <div className = "ElemBio">
           <h2>{elements[hoveredElem].name}</h2>
           <p>{elements[hoveredElem].summary}</p>
        </div>}
        
      </header>
    </div>
  );
}
interface ElementCardProp {
  elem: Element,
  setElem: Function
}

const ElementCard: FC<ElementCardProp> = (elemProp: ElementCardProp) => {
  
  let elem = elemProp.elem

  const getX = (eConfig: string) => {
    return 0
  }

  return <div className = "ElementCard" style = {{
    gridColumn: elem.xpos,
    gridRow: elem.ypos
  }}
    onMouseOver  = {() => elemProp.setElem(elem.number - 1)}
  >
    <p className = "symbolLbl">{elem.symbol}</p>
    <p className = "atomNum">{elem.number}</p>
  </div>
}

export default App;
