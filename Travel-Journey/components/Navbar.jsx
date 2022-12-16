import React from "react";
import logo from "../images/icon.png"

export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt="logo"/>
            <p>my travel journal.</p>
        </nav>
    )
}