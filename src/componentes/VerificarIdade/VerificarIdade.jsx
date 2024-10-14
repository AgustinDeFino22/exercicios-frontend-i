import './VerificarIdade.css';

const VerificarIdade = ({ idade }) => {
    const mensagem = idade >= 18
        ? `${idade} anos, é maior de idade`
        : `${idade} anos, é menor de idade`;
    const estilo = idade >= 18 ? 'maioridade' : 'menoridade';
    return (
        <div className={estilo}>
            {mensagem}
        </div>
    );
};

export default VerificarIdade;