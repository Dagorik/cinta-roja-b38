import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';
import Contador from './Contador';
import Multiplicador from './Multiplicador';

function App() {
  return (
    <div className="App">
      <h1>Hola desde el componente App</h1>
      <Saludo />
      <Despedida mensaje="Sale chido bye" />
      <Contador />
      <Multiplicador />
    </div>
  );
}

export default App;
