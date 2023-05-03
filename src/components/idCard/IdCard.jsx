import React from "react";
import Slika from "../slika/Slika"
import "./IdCard.css"

//props
// {name, surname, city}

const IdCard = ({fullName, dateOfBirth, city='Podgorica', src}) => {
    return <div className="idContainer">
        <div className="idPhotoContainer">
            <div className="idPhoto">Slika: <Slika src={src} /></div>
        </div>
        <div className="idData">
            <div>Ime i prezime: {fullName}</div>
            <div>Datum rodjenja: {dateOfBirth}</div>
            <div>Grad: {city}</div>
        </div>
    </div>
}

export default IdCard;