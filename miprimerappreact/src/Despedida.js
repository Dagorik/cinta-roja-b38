import React from 'react';

function Despedida(props){
    console.log(props);
    return (
        <div className="Despedida">
            <h2>{props.mensaje}</h2>
            <p>{new Date().toLocaleDateString()}</p>
        </div>
    )
}

export default Despedida;