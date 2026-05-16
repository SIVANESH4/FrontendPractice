import {useState} from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);
  return (
    <>
    <h1>Count : {count}</h1>
    <br/>
    <button onClick={()=>{
        setCount(count+1)
    }}>Increase</button>

    <button onClick={()=>{
        if(count<=0)
            setCount(0)
        else
            setCount(count-1)
    }}>Decrease</button>
    <button onClick={()=>{
        setCount(0)
    }}>Reset</button>
    </>
  )
}

export default Counter
