import {useState} from 'react'
import './App.css';
import Pelicula from './pelicula';
import Pagewrapper from './pagewrapper';
import databaseJSON from './database.json';
import Paginacion from './paginacion';

function App() {

   const [paginaActual, setPaginaActual] = useState(1);
   const TOTAL_POR_PAGINA = 7;


  let database = databaseJSON;

  const cargarPeliculas = () => {
    database = database.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = databaseJSON.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  cargarPeliculas();

  return (


  <Pagewrapper>
     
     {database.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

        <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} /> 
      
  
  </Pagewrapper>
  );
}

export default App;
