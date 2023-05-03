import React from "react";

const Slika = ({src}) => {
    return <div>
        <img className="imageContainer" src={`/images/${src}`} alt="loadovanaSlika" />
    </div>

}

export default Slika;