import './App.css';
import React from "react"
import Count from "./Components/Count.js"
import Box from "./Components/Box.js"
import boxes from "./Boxes.js"

function App(props) {
  const [count, setCount] = React.useState(0)
  const [squares, setSquares] = React.useState(boxes)  
 
  const styles = {
    backgroundColor:  props.darkMode ? "black" : "white"
  }

  const squareElements = squares.map(square => (
    <Box 
        key={square.id} 
        id={square.id} 
        on={square.on}
        toggle={togglev2}    
    />
  ))

  function toggle(id){
    setSquares(prevSquares => {
      const newSquares = []
      for(let i=0; i<prevSquares.length;i++){
        const currentSquare = prevSquares[i]
        if(currentSquare.id === id){
          const updatedSquare={
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquares.push(updatedSquare)
        } else{
          newSquares.push(currentSquare)
        }
      }
      return newSquares
    })
}

function togglev2(id){
  setSquares(prevSquares => {
    return prevSquares.map((square) => {
      return square.id === id ? {...square, on: !square.on} : square
    })
  })
}

  function add() {
      setCount(prevCount => prevCount + 1)
  }
  
  function subtract() {
      setCount(prevCount => prevCount - 1)
  }
 

  return (
      <main>
      {squareElements}
    </main>
  )
}

export default App;
