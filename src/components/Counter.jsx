import React from 'react'
import './Counter.css'
import { useState, useEffect } from 'react'

const Counter = () => {

const [count, setCount] = useState(0)
const addCount = () => {
 setCount(count + 1)
 if (count === 10) {
  setCount(count - 10)
 } 
}

useEffect(() => {
console.log('count atualizado')
}, [count])


  return (
    <div className='counter'>
    <h1> Olá!!! </h1>
    <p>Segue aqui um contador que fiz apenas para praticar o useState: </p>
    <button onClick={addCount}>{count}</button>
  </div>
  )
}

export default Counter