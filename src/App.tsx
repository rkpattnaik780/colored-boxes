import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from './Box';

function App() {

  const [boxes, setBoxes] = React.useState([
    [[0,0, false], [0,1, false], [0,2, false]],
    [[1,0, false], [1,1, false], [1,2, false]],
    [[2,0, false], [2,1, false], [2,2, false]],
  ]);



  return (
    <div className="App">

      {
        boxes.map(row => {
          return (
            <div>
              {row.map(col => {
                if(col[0] == 1 && (col[1] == 1 || col[1] == 2)) return <Box hidden={true} isGreen={col[2]} coordinate={[col[0], col[1]]} />
                return <Box coordinate={[col[0], col[1]]} isGreen={col[2]} setBox={setBoxes} box={boxes}/>
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
