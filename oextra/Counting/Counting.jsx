import React from 'react'

const Counting = ({ count, counting }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {counting('+')}}>Inc</button>
      <button onClick={() => {counting('-')}}>Dec</button>
    </div>
  )
}

export default Counting