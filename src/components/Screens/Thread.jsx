import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

function Examiner({ history }) {

    useEffect(() => {
        if(!localStorage.getItem('authToken')){
            history.push('/')
        }
    })

    const [booking, setBooking] = useState('');
    const [subject, setSubject] = useState('');
    const [first, setFirst] = useState('');
    const [start, setStart] = useState('');
    const [last, setLast] = useState('');
    const [end, setEnd] = useState('');
    const [message, setMessage] = useState('');

    const authToken = localStorage.getItem('authToken');

    const config = {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    }

    const getPredictions = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/created`, config)

            setBooking(response.data.result[0].booking)
            setSubject(response.data.result[0].subject)                          
            setFirst(response.data.result[0].first)
            setStart(response.data.result[0].start)                          
            setLast(response.data.result[0].last)
            setEnd(response.data.result[0].end)                          
            setMessage(response.data.result[0].message)


        } catch (error) {
            localStorage.removeItem('authToken');
            history.push('/')
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
            {booking} | {subject}<br /><br />
            first game:{first} {start} last game:{last} {end}<br /><br />
            Message: {message}
            
        </div>
        
        
    );
}

export default Examiner