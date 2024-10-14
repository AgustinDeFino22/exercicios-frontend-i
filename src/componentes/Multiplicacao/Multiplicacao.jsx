import "./Multiplicacao.css";

const Multiplicacao = ({ num1, num2 }) => {
  
  const resultado = Number(num1) * Number(num2);

  return (
    <div className="multiplicacao-container">
      <p>{num1} * {num2} é {resultado}</p>
    </div>
  );
};

export default Multiplicacao;