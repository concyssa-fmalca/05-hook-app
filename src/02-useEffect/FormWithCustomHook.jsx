import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm';

const FormWithCustomHook = () => {

    const {username, email, password, formState, onInputChange, onResetForm} = useForm({
        username:'',
        email:'',
        password:''
    })    


    

  return (
    <>
        <h1>Form with custom hook</h1>
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
        <input 
            type="password"
            placeholder='Password'
            name='password'
            className='form-control mt-3'
            value={password}
            onChange={onInputChange}
        />             

        <button className='btn btn-primary' onClick={onResetForm}>Borrar</button>


    </>
 )
}

export default FormWithCustomHook