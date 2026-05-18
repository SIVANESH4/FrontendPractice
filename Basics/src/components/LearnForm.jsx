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
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      FirstName: <input type='text' name='firstName' value = {formData.firstName} onChange={handleData}/>
      <br />
      LastName: <input type='text' name='lastName' value={formData.lastName} onChange={handleData} />
      <br />
      <input type="submit"/>
    </form>
    </>
  )
}

export default LearnForm
