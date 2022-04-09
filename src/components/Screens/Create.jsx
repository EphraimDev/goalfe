import { useState, useEffect } from 'react';
import { Link,  } from "react-router-dom";
import axios from 'axios';

function Create({ history }) {

    useEffect(() => {
        if(!localStorage.getItem('authToken')){
            history.push('/')
        }
    })

    const [username, setUsername] = useState('');

    const [input, setInput] = useState({
        booking:'',
        platform:'',
        first:'',
        start:'',
        last:'',
        end:'',
        subject:'',
        message:''
    })

    const [error, setError] = useState('');

    function handleChange(event) {
        const{name, value} = event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

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

    async function handleClick(e){
        e.preventDefault();
        try {
            if(input.booking && input.platform && input.first && input.start
                && input.last && input.end && input.subject && input.message){

                if(typeof input.booking !== 'undefined'){
                    const re = /^[0-9a-zA-Z]+$/;
                    if(input.booking.length < 7 || !re.test(input.booking)){
                        return setError("Invalid Booking Code")
                    }
                }

                const predict = {
                    booking:input.booking,
                    platform:input.platform,
                    first:input.first,
                    start:input.start,
                    last:input.last,
                    end:input.end,
                    subject:input.subject,
                    message:input.message,
                }
                
                await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create`, predict, config)
                                        
                history.push('/created');
    
            }else{
                return setError("Please fill all fields")
            }
        } catch (error) {
            return setError(error.response.data.error)
        }          
    }

    return(
        <div>
            <Link to = "/forum">
                <h1>
                Decimal gods
                </h1>
            </Link>
            <Link to= "/account">{username}</Link> <br /><br />
            <form action="">
                {error && <span>{error}</span>}<br /><br />
                Booking Code: <input type="text" placeholder ="Capital Letters & Numbers" name="booking"
                id="booking" value={input.booking} onChange={handleChange} /><br /> <br />
                Platform: <input type = "text" placeholder ="Betting Platform" name="platform"
                id="platform" value={input.platform} onChange={handleChange} /><br /> <br />
                First Game: <input type = "date" placeholder ="First Game K.O." name="first"
                id="first" value={input.first} onChange={handleChange} />
                <input type = "time" placeholder ="Start Time" name="start"
                id="start" value={input.start} onChange={handleChange} /> <br /> <br />
                Last Game: <input type = "date" placeholder ="Last Game K.O." name="last"
                id="last" value={input.last} onChange={handleChange} />
                <input type = "time" placeholder ="End Time" name="end"
                id="end" value={input.end} onChange={handleChange} /> <br /> <br />
                Subject: <input type = "text" placeholder ="Topic" name="subject"
                id="subject" value={input.subject} onChange={handleChange} /><br /> <br />
                Message: <textarea placeholder ="Body" name="message"
                id="message" value={input.message} onChange={handleChange} />
            </form><br /> <br />
            <Link to= "/forum"><button type="button" class="btn">Go Back</button></Link>
            <button onClick={(e) => handleClick(e)} className="btn">Make Prediction</button><br /> <br />
        </div>
    );
}

export default Create