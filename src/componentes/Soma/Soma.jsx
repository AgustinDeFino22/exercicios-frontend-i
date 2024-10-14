import './Soma.css'; 

const Soma = ({ num1, num2 }) => {
  
  const resultado = Number(num1) + Number(num2);

  return (
    <div className="soma-container">
      <p>A soma de {num1} + {num2} é {resultado}</p>
    </div>
  );
};

export default Soma;

