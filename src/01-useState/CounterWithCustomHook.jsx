import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterWithCustomHook = () => {

 const {counter, increment, decrement, reset} = useCounter();

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <hr/>
        <button onClick={increment}>+1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-1</button>
    
    </>
  )
}

export default CounterWithCustomHook