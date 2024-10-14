import'./Subtracao.css';
const Subtracao = ({ num1, num2 }) => {
    const resultado = Number(num1) + Number(num2);

    return(
        <div className="subtracao-container">
            <p>A subtração de {num1} - {num2} é {resultado}</p>
        </div>
    )
}

export default Subtracao;