import React from "react";
import logo from "../images/airbnb_1.png"

export default function Navbar (){
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--logo"/>
        </nav>
    )
}