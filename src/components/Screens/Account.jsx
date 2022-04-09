import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";

function Account({ history }) {

    useEffect(() => {
        if(!localStorage.getItem('authToken')){
            history.push('/')
        }
    })

    const [error] = useState('');

    const [username, setUsername] = useState('');
    const authToken = localStorage.getItem('authToken');

    const config = {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    }

    const getUserProfile = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/account`, config)
            
            if(response.status===200){
                setUsername(response.data.username)
            }
        } catch (error) {
            localStorage.removeItem('authToken');
            history.push('/')
        }       
    }
    
    useEffect(() => {
        getUserProfile()
    }, [])


    function handleClick(){
        localStorage.removeItem('authToken');
        history.push('/')
    }
    
    return(
        error ? <span> {error} </span> : <>
            <div>
            {username}
            </div>
            <Link to = '/forum'><button>Go Back</button></Link>
            <button onClick={(e) => handleClick()} className="btn">Logout</button><br /><br />
        </>      
    )
}

export default withRouter(Account)