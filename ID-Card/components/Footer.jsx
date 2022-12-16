import React from "react"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {RxInstagramLogo} from "react-icons/rx"
import {ImGithub} from "react-icons/im"




export default function Footer(){
    return(
        <footer>
            <AiOutlineTwitter className="footer__icon"/>
            <FaFacebookF className="footer__icon"/>
            <RxInstagramLogo className="footer__icon"/>
            <ImGithub className="footer__icon"/>
        </footer>
    )
}