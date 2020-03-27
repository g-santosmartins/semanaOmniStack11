import React from 'react';
import './global.css'
import Routes from './routes';
//Quando o HTML está escrito dentro de uma função JS
//Recebe o nome de JSX - JavaScript XML
//já vem com live-reload embutido
//Quando um codigo se repete muitas vezes criamos um componente a parte
//por questoes de performance nao podemos alterar o valor de uma variavel de forma direta
  //useState return Array[valor, funcao de atualizacao do valor ]

function App() {
  return (
    <Routes />
    
  );
}

export default App;

