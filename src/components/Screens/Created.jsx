import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

function Created({ history }) {

    useEffect(() => {
        if(!localStorage.getItem('authToken')){
            history.push('/')
        }
    })

    const [predictions] = useState([]);
    // const [booking, setBooking] = useState([]);
    // const [subject, setSubject] = useState('');
    const [prediction, setPrediction] = useState([]);


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

            setPrediction(response.data.booking)             
            console.log(response.data.booking);

        } catch (error) {
            // localStorage.removeItem('authToken');
            // history.push('/')
        }        
    }
    useEffect(() => {
        getPredictions()
    }, [])
    
    const reptiles = ["alligator", "snake", "lizard"];


    return(
        <div>
            <Link to = "/forum">
                <h1>
                Decimal gods
                </h1>
            </Link>
            Predictions <br /><br />
            {predictions.map((prediction, index) => {
                    <div key = {index}>
                        {prediction.booking}
                    </div>
            })}

            {prediction.booking}

            {reptiles.map((reptile) => <li>{reptile}</li>)}
            {/* {predictions.map((predictions) => <li>{reptile}</li>)} */}
        </div>
        
        
    );
    
}

export default withRouter (Created)