import { PinDropSharp } from "@material-ui/icons";
import React from "react";

export default function TextFeild(props) {
    return (
        <div>
            <label for={props.for}><b>{props.for}</b></label>
            <input
                className={props.className}
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    );
}