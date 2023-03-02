import React, { useState, useEffect } from 'react'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'',
        email:''
    })

    const {username, email} = formState;

    const onInputChange = ({target}) =>{
         const {name, value} = target   
        setFormState(
            {...formState, [name]:value}
        )
    }

    useEffect(() => {
       console.log('useEffect called!') 
    })
    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>
        <input 
            type="text"
            placeholder='Usuario'
            name='username'
            className='form-control'
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="email"
            placeholder='Email'
            name='email'
            className='form-control mt-3'
            value={email}
            onChange={onInputChange}
        />        
    </>
 )
}

export default SimpleForm