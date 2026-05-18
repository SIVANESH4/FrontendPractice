import React, { useState } from 'react'

const LearnForm = () => {
  const[formData, setFormData] = useState({
    firstName : '',
    lastName : '',
  })
  const handleData = (e) =>{
     setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) =>{ 
    e.preventDefault();
    console.log(formData);
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      FirstName: <input type='text' name='firstName' value = {formData.firstName} onChange={handleData}/>
      <br />
      LastName: <input type='text' name='lastName' value={formData.lastName} onChange={handleData} />
      <br />
      Login : <input type = 'button' value = {isLoggedIn ? "Logout" : "Login"} onClick = {()=>{
        setIsLoggedIn(!isLoggedIn);
      }} />
      <input type="submit"/>
    </form>
    {
      isLoggedIn ? <h1>Welcome!</h1> : <h1>who are you?</h1>
    }
    </>
  )
}

export default LearnForm
