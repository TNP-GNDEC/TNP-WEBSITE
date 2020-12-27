import React from "react";

import Connect from "./Connect";
import Explore from "./Explore";
import Downloads from "./Downloads";
import UsefulLinks from "./Links";

export default function LeftBar(){
    return(
        <div>
            <Connect />
            <Explore />
            <Downloads />
            <UsefulLinks />
        </div>
    )
}