import React from 'react';
import { Link,  } from "react-router-dom";

function Request() {
    return(
        <div>
            <Link to = "/forum">
                <h1>
                    Decimal gods
                </h1>
            </Link>
            <p>
                1 point per won odds <br />
                +1↑ 1 <br /><br />
                -   2 <br /><br />
                -1↓ 3<br /><br />
            </p>
            <Link to = "/forum"><button type="button" class="btn">Home</button></Link>
            <Link to = "/"><button type="button" class="btn">Log Out</button></Link>
        </div>
    );
}

export default Request