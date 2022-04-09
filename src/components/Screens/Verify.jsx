import React from 'react';
import { Link,  } from "react-router-dom";

function Verify(){
    return(
        <div>
            <Link to = "/forum">
                <h1>
                    Decimal Gods
                </h1>
            </Link>
            Green Tick (Verified) <br /><br />
            <Link>Winning 1</Link><br />
            <Link>Winning 2</Link><br /><br />
            <Link to = "/forum"><button type="button" class="btn">Home</button></Link>
            <Link to = "/"><button type="button" class="btn">Log Out</button></Link>
        </div>
    );
}

export default Verify