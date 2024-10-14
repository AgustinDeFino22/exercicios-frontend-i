import './OlaPessoa.css'; 


const OlaPessoa = ({ nome }) => {
  return (
    <div className="ola-pessoa">
      Olá, Agustin {}!
    </div>
  );
}
const App = () => {
  return (
    <div>
      <OlaPessoa nome="Agustin" />
    </div>
  );
}


export default App;
