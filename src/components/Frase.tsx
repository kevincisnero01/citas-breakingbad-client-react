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
    <div>
        <h1>{content.quote}</h1>
        <p>- {content.author}</p>
    </div>
  );

}

export default Frase
