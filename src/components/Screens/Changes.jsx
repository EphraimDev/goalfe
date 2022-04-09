import React from 'react'
import { Link, withRouter } from "react-router-dom";

function Changes() {
    return(
        <div>
            <h1>
                CBT
            </h1>
            <form action="">
                No. of Exam Candidates: <input type="date" /><br /> <br />
                No. of Exam Sections: <input type="date"/><br /> <br />
                No. of Exam Questions: <input type="date" /><br /> <br />
                Previous Exam Date: 23/07/2021 New Exam Date: <input type="date"/><br /> <br />
                Previous Date of Result Release: 02/08/2021
                New Date of Result Release: <input type="date"/><br /> <br />
                Download Previous Exam Questions
                Upload Exam Questions doc/pdf: <input type="file"/><br /> <br />
                Price: <br /> <br/>
            </form><br /> <br />
            <Link to= "/generate"><button type="button" class="btn">Make Payment</button></Link><br /> <br />
        </div>
    )
}

export default withRouter(Changes)