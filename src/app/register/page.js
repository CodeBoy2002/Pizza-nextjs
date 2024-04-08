"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleFormSubmit = (ev) => {
        ev.preventDefault()
        fetch('api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        })
    }
  return (
    <section className='mt-4'>
        <h1 className='text-center mb-2 text-primary text-2xl font-bold'>
            Register
        </h1>
        <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
            <input type='email' placeholder='email' value={email} onChange={ev => setEmail(ev.target.email)}/>
            <input type='password' placeholder='password' value={password} onChange={ev => setPassword(ev.target.password)}/>
            <button type='submit'>Register</button>
            <div className='my-4 text-center text-gray-500'> 
                or login with
            </div>
            <button className='flex justify-center gap-4'>
                <Image src={'/google.png'} alt={''} width={24} height={24} />
                Login with google
            </button>
        </form>
    </section>
  )
}

export default register