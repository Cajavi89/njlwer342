import React, { useState } from 'react';

/// Modifica el componente para que se puedan agregar tareas

function App() {
  const [task,setTask]=useState('');
  const [listaTareas, setListaTareas]=useState([])

  const addTask = (e)=>{
    e.preventDefault()
    setListaTareas([
      ...listaTareas,task
    ])
    setTask('')

  }

  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          <li>Sacar la ropa</li>
          <li>Hacer la cama</li>
          <li>Leer un rato</li>
          {listaTareas.map((el,index)=><li key={index}>{el}</li>)}
        </ul>

          <form onSubmit={addTask} >
            <input
            type="text"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            value={task}
            onChange={(e)=>setTask(e.target.value)}

          />
          </form>
      </div>
    </div>
  )
}



export default App;
