import React from "react";
import { useParams } from "react-router-dom";


const ComponenteParametros = (props) => {

    const { palabra, color, bg } = useParams();



    if (isNaN(palabra)) {
        return (
            <div className="container">
                <p style={color ? { color: color, backgroundColor: bg } : null}>
                    La palabra es: {palabra}
                </p>
            </div>
        );
    } else {
        return (
            <div className="container">
                <p style={color ? { color: color, backgroundColor: bg } : null}>
                    El número es: {palabra}
                </p>
            </div>
        );
    }



}

export default ComponenteParametros;