import React from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
   
    const AoDigitado = (evento) =>{      
        props.AoAlterado(evento.target.value)
        
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={AoDigitado} required={props.obrigatorio} placeholder={props.placeholder} type="text" />
        </div>
    );
};

export default CampoTexto;
