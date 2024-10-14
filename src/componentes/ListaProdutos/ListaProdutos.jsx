import './ListaProdutos.css';

const ListaProdutos = () => {
  const produtos = [
    'Celulcar Samsung', 
    'Notebook Acer', 
    'Smart Tv LG', 
    'Impressora HP', 
    'Tablet Multilaser', 
    'Monitor Dell'
  ];

  return (
    <div className="lista-produtos">
      <ul>
        {}
        {produtos.map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProdutos;
