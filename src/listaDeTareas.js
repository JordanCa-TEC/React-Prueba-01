import React from 'react';
import './App.css';

function ListaDeTareas({ tareas }) {
  return (
    <div className="ListaDeTareas">
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;
