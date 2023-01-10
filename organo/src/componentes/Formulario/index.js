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

    const AoSalvar = (evento) => {
        evento.preventDefault();
        console.log('form foi submetido');
    };

    return (
        <section className="formulario">
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados para criar os cards dos colaboradores</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da sua imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
