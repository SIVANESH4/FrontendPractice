import { useState } from 'react'
import './App.css'
import LearnJSX from './components/LearnJSX'
import LearnEvents from './components/LearnEvents'
import LearnState from './components/LearnState'
import Counter from './components/Counter'

function App() {
  
  return (
    <>
     {/* <LearnJSX name = {name} age = {age} fruits = {fruits} frnd = {dict}/> */}
     <LearnEvents />
     {/* <LearnState/> */}
     {/* <Counter/> */}
    </>
  )
}

export default App
