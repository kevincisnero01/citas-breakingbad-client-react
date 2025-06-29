import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px){
    margin-top: 10rem;
  }

  h1{ 
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before{
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 1.4rem;
      font-weight: bold;
      text-align: right;
      color: #666;
      margin-top: 2rem;
  }
`

// 1. Define una interfaz para las props del componente Frase
interface FraseProps {
    content: {
        quote: string;
        author: string;
    };
}

const Frase = ( {content}: FraseProps ) =>{

// 2. Asigna el tipo 'FraseProps' a las props del componente  desestructura 'content' directamente de las props.
    return (
    // 3. Envuelve los elementos en un Fragment
    <ContenedorFrase>
        <h1>{content.quote}</h1>
        <p>- {content.author}</p>
    </ContenedorFrase>
    );

}

export default Frase
