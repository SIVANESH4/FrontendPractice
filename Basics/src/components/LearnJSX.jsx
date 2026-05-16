import React from 'react'

const LearnJSX = (props) => {
  return (
    <>
    <h1>Welcome Back {props.name}</h1>
    <h3>Siva: Hi! I'm {props.name}, I'm {props.age}years old</h3>
    <h3>I like {props.fruits}</h3>
    <h2>My frnd name is, {props.frnd["fname"]}</h2>
    </>
  )
}

export default LearnJSX
