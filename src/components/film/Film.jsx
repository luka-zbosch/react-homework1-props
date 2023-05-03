import React from "react";
import Slika from "../slika/Slika"
import "./Film.css"



const Film = ({name, year, genre, director, starring, src}) => {
    return <div className="movieContainer">
                <div>Naziv: {name}</div>
                <div>Godina: {year}</div>
                <div>Žanr: {genre}</div>
                <div>Režiser: {director}</div>
                <div>Uloge: {starring}</div>
                <div>Slika: <Slika src={src} /></div>
            </div>
}

export default Film;