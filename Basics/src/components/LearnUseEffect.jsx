import {useState, useEffect} from 'react'


const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const [random, setRandom] = useState(0)
    const setRandomNumber = () =>{
        setRandom(Math.random())
    }
    const increase = () =>{
        setCount(count + 1)
    }
    const decrease = () =>{
        setCount(count - 1)
    }
    useEffect(()=>{
        console.log('useEffect Called')
    },[random])
  return (
    <>
    <h1>Count {count}</h1>
    <button onClick={increase}>Inc</button>
    <button onClick={decrease}>Dec</button>
    <h1>Random Number {random}</h1>
    <button onClick={setRandomNumber}>Set Random Number</button>
    </>
  )
}

export default LearnUseEffect
