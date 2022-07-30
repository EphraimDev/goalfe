import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, withRouter } from "react-router-dom";

function Verify({ history }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const params = useParams();
  console.log(history)
  useEffect(() => {
    verifyToken();
  }, []);
  const verifyToken = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/verify/${params.confirmToken}`
      );
      if(response.status === 200){
        setSuccess(response.data)
      }
    } catch (error) {
      console.log(error);
      if(error.response && error.response.data){
        setError(error.response.data)
      } else {
        setError(error.message)
      }
    }
  };

  return (
    <div>
      <h3> Account Verification</h3>
      {error && <span>{error}</span>}
      {success && (
        <span>
          {success}
          <Link to="/">Login</Link>
        </span>
      )}
    </div>
  );
}

export default withRouter (Verify)
