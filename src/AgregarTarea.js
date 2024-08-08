import React, { useState } from 'react';
import './App.css';

function AgregarTarea({ agregarTarea }) {
  const [nuevaTarea, setNuevaTarea] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    agregarTarea(nuevaTarea);
    setNuevaTarea('');
  };

  return (
    <div className="AgregarTarea">
      <form onSubmit={manejarSubmit}>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Nueva tarea" 
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AgregarTarea;

