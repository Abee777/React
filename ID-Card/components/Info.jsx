import React from "react"
import IMG from "../images/Abee.jpg"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"

export default function Info(){
    return(
        <div className="divInfo">
            <img src={IMG} width="350px" alt="me"/>
            <h1 className="name">Abee</h1>
            <h4 className="job">Frontend Developer</h4>
            <p className="website">vladimirsalatic.com</p>     
            <div className="info__btn">
                <a href="/#" className="btn1"><AiOutlineMail className="info__icon"/> Email</a>
                <a href="/#" className="btn2"><AiOutlineLinkedin className="info__icon"/> LinkedIn</a>
            </div>
        </div>
    )
}