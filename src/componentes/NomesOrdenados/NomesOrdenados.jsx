import './NomesOrdenados.css'; 

const NomesOrdenados = () => {

  const listaNomes = ['Agustin', 'Paula', 'Guadalupa', 'Rocio', 'Sofia'];

  const nomesOrdenados = listaNomes.sort();

  return (
    <div className="nomes-ordenados-container">
      <ol>
        {nomesOrdenados.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ol>
    </div>
  );
};

export default NomesOrdenados;

