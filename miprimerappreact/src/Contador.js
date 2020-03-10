import React, { useState } from 'react';

function Contador() {
    const [numero, setNumero] = useState(0);

    const onClickSuma = () => {
        console.log('onClickSuma');
        setNumero(numero+1)
    }

    const onClickResta = () => {
        console.log('onClickResta');
        setNumero(numero-1)
    }

    return (
        <div>
            <h1>{`El contador va en ${numero}`}</h1>
            <button onClick={onClickSuma}>Sumar +</button>
            <button onClick={onClickResta}>Restar -</button>
        </div>
    )

}

export default Contador;