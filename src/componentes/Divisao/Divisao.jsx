import'./Divisao.css';
const Divisao = ({ num1, num2}) => {
    const resultado = Number(num1) / Number(num2);

    return(
        <div className="divisao-container">
        <p> A divisão {num1} / {num2} é {resultado}</p>
        </div>
    )
}

export default Divisao;