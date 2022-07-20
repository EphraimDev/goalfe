import React, { useState } from 'react';
import axios from 'axios';
import { Link,  } from "react-router-dom";

function Verify({ match }){

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    try {
        const response = axios.post(`${process.env.REACT_APP_BACKEND_URL}
        /verify/${match.params.confirmAccountToken}`)
        
        

    } catch (error) {
        
    }

    return <div>
        <h3> Account Verification</h3>
        {error && <span>{error}</span>}
        {success && (
        <span>{success}<Link to = "/login">Login</Link></span>
        )}
    </div>
}

export default Verify