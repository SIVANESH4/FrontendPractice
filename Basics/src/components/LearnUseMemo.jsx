import React from 'react'
import { useState, useMemo } from 'react'

const LearnUseMemo = () => {
    const[count, setCount] = useState(0)
    const[number, setNumber] = useState(10000000)
    const sumOfNumber = useMemo(() =>{
        let sum = 0
        for(let i = 0; i <= number; i++){
            sum += i
        }
        return sum
    }, [])
    const handleClick = () =>{
        setCount(count + 1)
    }
    console.log(sumOfNumber)
  return (
    <>
    <h2>Count {count}</h2>
    <button onClick={handleClick}>click</button>
    </>
  )
}

export default LearnUseMemo
