import React from "react";
import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';

const Formulario = () => {
  return(
    <section className="formulario">
      <form action="">
        <h2>Preencha os dados para criar os cards dos colaboradores</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
        <CampoTexto label="Imagem"placeholder="Digite o endereço da sua imagem"/>
      </form>
    </section>
  )
}

export default Formulario;