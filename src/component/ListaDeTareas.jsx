import React, { useState } from 'react';


function ListaDeTareas({ tareas = [] }) { 
  const [listaDeTareas, setListaDeTareas] = useState(tareas);
  

  const manejarCambio = (id) => {
    const nuevasTareas = listaDeTareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });

    setListaDeTareas(nuevasTareas);
  };

  return (
    <div>
      <h3>Lista de Tareas</h3>
      <ul>
        {listaDeTareas.length > 0 ? (
          listaDeTareas.map((tarea) => (
            <li key={tarea.id}>
              <label>
                <input
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => manejarCambio(tarea.id)}
                />
                {tarea.nombre}
              </label>
            </li>
          ))
        ) : (
          <li>No hay tareas disponibles.</li>
        )}
      </ul>
    </div>
  );
}

export default ListaDeTareas;



