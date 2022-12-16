import React from "react";
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import "./style.css"

export default function App(){

    const [dice, setDice] = React.useState(randomDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(()=> {
        if (dice.every((die,i,arr) => die.isHeld && die.value === arr[0].value)){
            setTenzies(true)
            console.log("You won!")
        }
    },[dice])

    function randomDice(){
        const arr=[]
        for (let i=0; i<10; i++){
            arr.push({
                value: Math.ceil(Math.random()*6),
                isHeld: false,
                id: nanoid()
            })
        }
        
        return arr
    }

    function rollDice(){
        if(!tenzies){
            setDice(prevDice => prevDice.map(die =>{
                return die.isHeld ? die : {
                    value: Math.ceil(Math.random()*6),
                    isHeld: false,
                    id: nanoid()
                }
            }))
        } else {
            setTenzies(false)
            setDice(randomDice())
        }
    }

    function holdDie(id){
        setDice(prev => prev.map(die => {
            return id === die.id ? {...die, isHeld: !die.isHeld} : die
       }))
        // console.log(id)
    }

    const elements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} hold={(id)=>holdDie(die.id)}/>
    ))
    //https://github.com/alampros/react-confetti#readme
    return (
        <main>
            {tenzies && <Confetti gravity={0.02} />}
            <h1 className="title">Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="container">
                {elements}
            </div>
            <button className="button" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}