import React from "react";

import Office from "./Office";
import Faculty from "./Faculty";
import Academic from "./Academic";
import Student from "./Student";

export default function RightBar(){
    const classes = useStyles();
    return(
        <div>
            <Office />
            <Faculty />
            <Academic />
            <Student />
        </div>
    )
}