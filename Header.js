import React from "react";
import logo from "../Assets/Images/Troll Face.png";
import '../components/Header.css'

export default function Header() {
    return(
        <header className="header">
            <img src={logo} alt="logo" className="logo"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project-name">React Course - Project 3</h4>
        </header>
    )
}
