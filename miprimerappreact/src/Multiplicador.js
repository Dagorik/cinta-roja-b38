import React, {useState} from 'react';

function Multiplicador(){
    
    const [resultado, setResultado] = useState(0);
    const [inputUno, setInputUno] = useState(0);
    const [inputDos, setInputDos] = useState(0);

    const calcular = () => {
        const res = inputUno * inputDos;
        setResultado(res)
    }

    const onChangeInput = (event) => {
        if (event.target.id === 'numero1'){
            setInputUno(event.target.value)
        } else {
            setInputDos(event.target.value)
        }
    }

    return(
        <div>
            <input onChange={onChangeInput} id="numero1" placeholder="Numero 1"></input>
            <p>X</p>
            <input onChange={onChangeInput} id="numero2" placeholder="Numero 2"></input>
            <br/>
            <button onClick={calcular}>Multiplicar</button>
            <p>El resutado es: {resultado}</p>
        </div>
    )


}

export default Multiplicador;