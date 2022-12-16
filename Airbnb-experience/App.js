import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data"




import "./styles.css"

export default function App() {
    const person = data.map(item => {
        return <Card   
                    key={item.id} 
                    item={item} 
                />
    })
    return(
        <div className="container">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {person}    
            </section>
            
        </div>
    )
}

