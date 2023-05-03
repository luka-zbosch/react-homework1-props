import React from "react";
import Slika from "../slika/Slika"
import "./Knjiga.css"



const Knjiga = ({name, year, author="Ivo Andrić", src, quote}) => {
    return <div className="bookContainer">
        <div>Naziv: {name}</div>
        <div>Godina izdavanja: {year}</div>
        <div>Autor: {author}</div>
        <div>Slika: <Slika src={src} /></div>
        <div>Citat:" {quote} "</div>
    </div>
}

export default Knjiga;