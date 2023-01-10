import React from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ];
    return (
        <section className="formulario">
            <form action="">
                <h2>Preencha os dados para criar os cards dos colaboradores</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da sua imagem"
                />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
};

export default Formulario;
