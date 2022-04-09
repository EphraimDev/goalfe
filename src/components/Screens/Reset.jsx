import React, { useState } from 'react';
import axios from 'axios';
import { Link,  } from "react-router-dom";

function Reset({ match }) {

    const [input, setInput] = useState({
        password:'',
        confirmPassword:''
    })

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function handleChange(e) {

        const{name, value} = e.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    async function handleClick(e){
        
        e.preventDefault();

        const config = {
            header:{
                'Content-Type': 'application/json'
            }
        }

        if(input.password !== input.confirmPassword){
            input.password('');
            input.confirmPassword('');
            setTimeout(() =>{
                setError('')
            }, 5000);
            return setError('Passwords do not match')
        }

        try {
            const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/forgotpassword/${match.params.resetToken}`, input.password, config)
            
            console.log(response)

            setSuccess(response.data);
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() =>{
                setError('')
            }, 5000)
        }
    }

    return <div>
        <h3> Reset Password</h3>
        {error && <span>{error}</span>}
        {success && (
            <span>{success}<Link to = "/login">Login</Link></span>
        )}

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Enter New Password"
        name="password" onChange={handleChange} value={input.password} /><br /> <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" placeholder="Confirm New Password"
        name="confirmPassword" onChange={handleChange} value={input.confirmPassword}/><br /> <br />
        <button onClick={(e) => handleClick(e)} className="btn">Send Mail</button>
    </div>
}

export default Reset