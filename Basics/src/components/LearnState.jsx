import {useState} from 'react'

const LearnState = () => {
    const [num, setNum] = useState(1)
  return ( 
    <>
        <button onClick={() => {
            setNum(num+1)
        }}>Count is {num}</button>
    </>
  )
}

export default LearnState
