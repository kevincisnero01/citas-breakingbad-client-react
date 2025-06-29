import { useState, useEffect } from 'react';
import Frase from './components/Frase'
import './App.css'
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #117d35 40%, #0f574e 100%);
  background-size 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  maring-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  //state de frases
  const [frase , guardarFrase] = useState({quote: '', author: ''});

  const consultarAPI = async () => {
    try {
      const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
      const data = await api.json();

      if (data && data.length > 0) {
        guardarFrase(data[0]);
      }
    }catch (error) {
      console.error("Error al obtener la frase:", error);
    }
  }

  useEffect(() => {
    consultarAPI();
  },[])

  return (
    <Contenedor>

      <Frase 
        content={frase}
      />

      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  )
}

export default App
