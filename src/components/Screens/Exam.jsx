import React from 'react';
import axios from 'axios';

function Exam(){

    let email

    async function handleClick(event){
        event.preventDefault();

        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/exam`, email)
    }

    return <div><br />
        Enter Email: <input type="email" />
        <button onClick={(e) => handleClick(e)}>Send Mail</button>
    </div>
}

export default Exam;