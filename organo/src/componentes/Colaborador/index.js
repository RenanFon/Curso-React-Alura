import React from "react";
import './Colaborador.css';

const Colaborador = () => {
    return(
        <div className="colaborador">
            <div className="cabecalho">
                <img src="https://github.com/RenanFon.png" alt="Eu" />
            </div>
            <div className="rodape">
                <h4>Seu nome</h4>
                <h5>Cargo</h5>
            </div>
        </div>
    )
}

export default Colaborador;
