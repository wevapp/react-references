import { useState } from "react"

import Counting from "./Counting"
const App = () => {
  
  const [count, setCount] = useState(0)

  const counting = (operation) => {
    if(operation === '+'){
      setCount(count + 1)
    }else{
      count <= 0 ? alert("Not Enough") : setCount(count - 1);
    }
  }
  
  return (
    <>
      <Counting 
        count={count}       // Variable count and function counting
        counting={counting} // turns to Props send to another component
      />   
    </>
  )
}

export default App