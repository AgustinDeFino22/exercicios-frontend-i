import './NumerosImpares.css';
const NumerosImpares = () => {
    const numeros = [1, 5, 7, 13, 15, 31];

    const numerosImpares = numeros.filter(numero => numero % 2 == 1);

    return (
        <div className="numeros-impares">
            <ul>
                {numerosImpares.map((numero, index) => (
                    <li key={index}>{numero}</li>
                ))}
            </ul>
        </div>


    );
};

export default NumerosImpares;