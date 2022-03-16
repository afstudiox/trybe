import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input type="email" id="id-email" />
      </label>
      <input type="button" id="btn-send" data-testid="id-send" value="Enviar" />
      <input type="button" id="btn-back" value="Voltar" />
    </div>
  );
}

export default App;
