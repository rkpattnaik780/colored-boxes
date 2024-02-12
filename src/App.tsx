import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Box } from './Box';

function App() {

  const [clickedStack, setClickedStack] =  useState<number[][]>([]);
  const [boxes, setBoxes] = React.useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);
  const timerID = useRef<NodeJS.Timer>();

  useEffect(() => {
    if(clickedStack.length === 7) {
        
      timerID.current = setInterval(() => {
        console.log("hello");
        let row: number, col: number;
        
        setClickedStack((stack) => {
          let newClickedStack = [...stack];
          console.log(newClickedStack);
          [row, col] = newClickedStack[newClickedStack.length - 1];
          newClickedStack.pop();
          console.log(row, col);
          return newClickedStack;
        });

        setBoxes((boxes) => {
          let newBoxes = [...boxes];
          console.log(row, col);
          newBoxes[row][col] = false;

          console.log(newBoxes);
          return newBoxes;
        });
  
        console.log(clickedStack);
      }, 2000);
    }

    if(clickedStack.length === 0) {
      console.log(timerID.current);
      console.log("I hit 0")
      clearInterval(timerID.current);
    }

  }, [clickedStack]);

  const updateBox = (row: number, col: number) => {
    console.log("update box called");
    let newBoxes = [...boxes]
    if(newBoxes[row][col] === false) {
       setClickedStack([...clickedStack, [row, col]]);
    }
    newBoxes[row][col] = true;
    setBoxes(newBoxes);
  };

  return (
    <div className="App">
      {
        boxes.map((row, rowIndex) => {
          return (
            <div>
              {row.map((isGreen, colIndex) => {
                if(rowIndex == 1 && (colIndex === 1 || colIndex === 2)) return <Box row={rowIndex} col={colIndex} isHidden={true} updateBox={updateBox} key={rowIndex + colIndex} isGreen={isGreen}/>
                return <Box row={rowIndex} col={colIndex} isGreen={isGreen} updateBox={updateBox} key={rowIndex + colIndex}/>
              })}
              <br />
            </div>
            
          )
        })
      }
      
    </div>
  );
}

export default App;
