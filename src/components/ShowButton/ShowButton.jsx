import { useState } from 'react'

const ShowButton = () => {

    // Variable and usestate
    const [userInput, setUserInput] = useState('')
    const [fruits, setFruit] = useState(['apple','mango','melon'])
    const [isClick,  setClick] = useState(false)
    
    // handle user input
    const handleUserInput = (e) => {
      setUserInput(e.target.value)
    }

    // handle add button
    const handleAdd = () => {
      setFruit([...fruits, userInput])
      setUserInput('')
    }

    // handle show fruits
    const handleShow = () => {
      setClick(!isClick)
    }

    // Handle remove
    const handleRemove = (fruitIndex) => {
      const filteredFruit = fruits.filter(
        (fruit,index) => index !== fruitIndex  
      )
      setFruit(filteredFruit)
    }

  return (
    <div className='main'>  
        {/* user input */}
      <input value={userInput} className="border" onChange={handleUserInput}/>
      <br />

      {/* add fruits */}
      <button onClick={handleAdd}>Add</button>
      <br />

      {/* show fruits */}
      <button onClick={handleShow}>Show</button>
      <br />
      <br />

      {/* list of fruits */}
      <ul className="container grid gap-1">
        {isClick && fruits.map((Prutas,index) =>
            <div key={index} className='grid grid-cols-2'>
              <li className="border p-2" >{Prutas}</li>
              <button onClick={() => {handleRemove(index)}}>Remove</button>
            </div>
        )}
      </ul>
    </div>
  )
}

export default ShowButton