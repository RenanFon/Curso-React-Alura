import React, { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';


export default function App() {

  const [colaboradores, setColaboradores] = useState([]); 

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
   }

  return (
    <div>
      <Banner />
      <Formulario aoColaboradorCadastrado ={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}
