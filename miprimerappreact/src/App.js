import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';
import Contador from './Contador';
import Multiplicador from './Multiplicador';
import Card from './Card';
import axios from 'axios';

function App() {
  // const Cards=[<Card title="Titulo1"/>, <Card title="Titulo2"/>, <Card title="Titulo3"/>, <Card title="Titulo4"/>]
  // const arrObjects=[
  //   {
  //     id:1,
  //     title:"Harry Potter",
  //   },
  //   {
  //     id:2,
  //     title:"Narnia",
  //   },
  //   {
  //     id:3,
  //     title:"Percy Jackson",
  //   },
  //   {
  //     id:4,
  //     title:"El principito",
  //   },
  //   {
  //     id:5,
  //     title:"Una cerveza de nombre derrota",
  //   }
  // ];
  const [isLoading, setIsLoading] = useState(true);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
      .then((result) => {
        setAuthors(result.data)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);

  // const arrCards= arrObjects.map((pelicula)=>{
  //   return <Card title={pelicula.title}/>
  // })
  const validacion = () => {
    if(isLoading){
      return <h1>Cargando...</h1>
    }else {
      const listCardAuthor =  authors.map((author) => {
        return <Card title={author.name} />
      });
      return listCardAuthor;
    }
  }
  

  return (
    <div className="App">
      {/* <h1>Hola desde el componente App</h1>
      <Saludo />
      <Despedida mensaje="Sale chido bye" />
      <Contador />
      <Multiplicador /> */}
      <div className="row">
        {validacion()}
      </div>
      

    </div>
  );
}

export default App;
