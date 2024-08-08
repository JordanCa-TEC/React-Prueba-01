import React, { useState } from 'react';
import './App.css';
import Titulo from './Titulo';
import Contador from './contador';
import ListaDeTareas from './listaDeTareas';
import AgregarTarea from './AgregarTarea';

function App() {
  const [tareas, setTareas] = useState(['Tarea 1', 'Tarea 2']);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  return (
    <div className="App">
      <Titulo />
      <Contador />
      <ListaDeTareas tareas={tareas} />
      <AgregarTarea agregarTarea={agregarTarea} />
    </div>
  );
}

export default App;

