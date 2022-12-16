import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

import "./styles.css"

export default function App(){
    const location = data.map(item =>{
        return <Card 
                key= {item.id}
                item={item}
                />
    })
    
    return(
        <div className="container">
            <Navbar />
            {location}
        </div>
        
    )
}