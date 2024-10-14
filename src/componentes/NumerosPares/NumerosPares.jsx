import './NumerosPares.css';

const NumerosPares = () => {
  
  const numeros = [2, 6, 10, 12, 20, 24];

  
  const numerosPares = numeros.filter(numero => numero % 2 === 0);

  return (
    <div className="numeros-pares-container">
      <ul>
        {numerosPares.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumerosPares;


