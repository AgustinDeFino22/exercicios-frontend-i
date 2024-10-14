import './HoraAtual.css';



const HoraAtual = () => {
  const horaAtual = new Date().getHours();
    return (
     <>
      <div className="horaAtual">{horaAtual}</div>
     </>
   );
}

export default HoraAtual;