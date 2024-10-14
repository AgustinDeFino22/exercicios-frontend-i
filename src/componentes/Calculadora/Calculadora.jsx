import './Calculadora.css'; 
const Calculadora = ({ num1, num2, operacao }) => {
  let resultado;

  
  const numero1 = Number(num1);
  const numero2 = Number(num2);

  switch (operacao) {
    case 'soma':
      resultado = numero1 + numero2;
      break;
    case 'subtracao':
      resultado = numero1 - numero2;
      break;
    case 'multiplicacao':
      resultado = numero1 * numero2;
      break;
    case 'divisao':
      resultado = numero2 !== 0 ? numero1 / numero2 : 'Erro: Divisão por zero!';
      break;
    default:
      resultado = 'Operação inválida';
  }

  return (
    <div className="calculadora-container">
      <p>Resultado: {resultado}</p>
    </div>
  );
};

export default Calculadora;
