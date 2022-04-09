import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

function Forgot() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    async function handleClick(e){
        e.preDefault();

        const config = {
            header:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}//forgotpassword`, { email }, config)
            
            setSuccess(data.data);
        } catch (error) {
            return setError(error.response.data.error)
        }
    }

    return <div>
        <h3>Forgot Password</h3>
        {error && <span>{error}</span>}
        {success && <span>{success}</span>}
        <div>
            <p>Please, Enter the email address or Phone Number you registered with</p>
            <label htmlFor="email">Email or Phone:</label>
            <input type="email" placeholder="Email or Phone"
            name="email" onChange={(e) => setEmail(e.target.value)} /><br /> <br />
            <button onClick={(e) => handleClick(e)} className="btn">Submit</button>
            <Link to = "/"><button className="btn">Go Back</button></Link>
        </div>
    </div>  
}

export default withRouter(Forgot)