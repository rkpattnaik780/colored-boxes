import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Box } from './Box';

function App() {

  const [clickedStack, setClickedStack] =  useState<number[][]>([]);
  const [boxes, setBoxes] = React.useState<boolean[][]>([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);
  const timerID = useRef<NodeJS.Timer>();

  useEffect(() => {
    if(clickedStack.length === 7) {
        
      timerID.current = setInterval(() => {
        let row: number, col: number;
        
        setClickedStack((stack) => {
          let newClickedStack = [...stack];
          [row, col] = newClickedStack[newClickedStack.length - 1];
          newClickedStack.pop();
          return newClickedStack;
        });

        setBoxes((boxes) => {
          let newBoxes = [...boxes];
          newBoxes[row][col] = false;
          return newBoxes;
        });
        }, 2000);
    }

    if(clickedStack.length === 0) {
      clearInterval(timerID.current);
    }

  }, [clickedStack]);

  const updateBox = (row: number, col: number) => {
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
            <div key={rowIndex}>
              {row.map((isGreen, colIndex) => {
                if(rowIndex === 1 && (colIndex === 1 || colIndex === 2)) return <Box row={rowIndex} col={colIndex} isHidden={true} updateBox={updateBox} key={rowIndex + "-" + colIndex} isGreen={isGreen}/>
                return <Box row={rowIndex} col={colIndex} isGreen={isGreen} updateBox={updateBox} key={rowIndex + "-" + colIndex}/>
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
