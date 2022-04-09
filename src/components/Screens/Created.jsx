import React, { useState, useEffect } from 'react';
import { Link,  } from "react-router-dom";
import axios from 'axios';

function Created({ history }) {

    useEffect(() => {
        if(!localStorage.getItem('authToken')){
            history.push('/')
        }
    })

    const [username, setUsername] = useState('');
    const [booking, setBooking] = useState('');
    const [subject, setSubject] = useState('');

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
                setSubject(response.data.subject)
            }
        } catch (error) {
            localStorage.removeItem('authToken');
            history.push('/')
        }        
    }
    
    useEffect(() => {
        getUserProfile()
    }, [])

    const getPredictions = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/created`, config)

            if(response.status===200){
                setBooking(response.data.booking)
            }
        } catch (error) {
            //localStorage.removeItem('authToken');
            //history.push('/')
        }        
    }

    useEffect(() => {
        getPredictions()
    }, [])

    return(
        <div>
            <Link to = "/forum">
                <h1>
                Decimal gods
                </h1>
            </Link>
            Predictions <br /><br />
            <Link to= "/account">{username}</Link>{subject}{booking} <br /><br />
        </div>
    );
}

export default Created