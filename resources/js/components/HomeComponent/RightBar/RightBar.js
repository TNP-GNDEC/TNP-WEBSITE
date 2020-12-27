import React from "react";

import Office from "./Office";
import Faculty from "./Faculty";
import Academic from "./Academic";
import Student from "./Student";
import Location from "./Location";
import FooterCard from "./FooterCard";

export default function RightBar(){
    return(
        <div>
            <Office />
            <Faculty />
            <Academic />
            <Student />
            <Location />
            <FooterCard />
        </div>
    )
}