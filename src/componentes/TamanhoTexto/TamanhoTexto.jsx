import './TamanhoTexto.css';

const TamanhoTexto = ({ texto }) => {
  
  const tamanho = texto.length;

  return (
    <div className="tamanho-texto-container">
      <p>{tamanho}Exercícios</p>
    </div>
  );
};

export default TamanhoTexto;
