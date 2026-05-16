import React, { useState } from 'react'


const LearnEvents = () => {
    // let handleClick = () =>{
    //     let name = 'John'
    //     props.getName(name)
    // }
    // let handleClickAgain = (param) =>{
    //     console.log(param)
    // }
    const [name, setName] = useState('')
    const handleChange =()=>{
        setName(value)
    }
  return (
    <>
    {/* <button onClick={() => handleClickAgain("I'm Happy")}>Happy</button> */}
    {/* <button onClick={handleClick}>Click Me</button> */}
    <input type="text"
    value={name}
    onChange={handleChange}
     />
    <p>Your Name is {name}</p>
    </>
  )
}

export default LearnEvents
