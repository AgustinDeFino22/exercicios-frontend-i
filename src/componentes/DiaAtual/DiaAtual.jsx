import './DiaAtual.css';

const DiaAtual = () => {
    const diaAtual = new Date().getDate();
    return(
        <>
            <div className="diaAtual">{diaAtual}</div>
        </>
    );
};

export default DiaAtual;