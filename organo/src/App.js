import React from 'react';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';

export default function App() {
  return (
    <div>
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
      <CampoTexto
        label="Imagem"
        placeholder="Digite o endereço da sua imagem"
      />
    </div>
  );
}
