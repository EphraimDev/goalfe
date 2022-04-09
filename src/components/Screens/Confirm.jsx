import React from 'react';
import { Link,  } from "react-router-dom";

function Confirm({ history }) {

    return(
        <div>
            Click on link sent to your mail to confirm your account
            <Link to= "/forum"><label class="completed"></label> <br /> <br /></Link>
        </div>
    );
}

export default Confirm