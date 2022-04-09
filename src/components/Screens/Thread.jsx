import React from 'react';
import { Link,  } from "react-router-dom";

function Examiner() {

    return(
        <div>
            <Link to = "/forum">
                <h1>
                Decimal gods
                </h1>
            </Link>
            <Link>reply</Link><br />
            Topic 1 - <Link to = "/account">user A </Link>(2.10 odds)<br />
            <Link>like</Link> <Link>quote</Link><br /><br />
            <Link>comment 1</Link><br />
            <Link>like</Link> <Link>quote</Link><br /><br />
            <Link>comment 2</Link><br />
            <Link>like</Link> <Link>quote</Link>
        </div>
    );
}

export default Examiner