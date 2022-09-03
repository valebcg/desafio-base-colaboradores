import React, { useState } from "react";
import { baseColaboradores } from "./baseColaboradores";

function App() {
  const [array, setArray]= useState(baseColaboradores)
  const [colaborador, setColaborador] = useState("");
  const [email, setEmail]= useState ("")
  const [name, setName]= useState ("")
  
const captureInput= (e) => {
  setArray([
    ...array,
{nombre: name,correo: email},
  ])
      
  setEmail("")
  setName("")
}

  return (
    <>
      <div className="app">
        <div className="buscador">
          <h1>Buscador de Colaboradores</h1>
          <input
            type="text"
            placeholder="Buscar Colaborador"
            className="search"
            onChange={(e) => setColaborador(e.target.value)}
          />
        </div>
        </div>

<div className="container">
        <input
          type="text" 
          className="input"
          value={name}
          placeholder="Ingrese el nombre del Colaborador"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="email"
          className="input"
          value={email}
          placeholder="Ingrese el correo del colaborador"
          onChange={(e)  => setEmail(e.target.value)}
        ></input>
        <button onClick={captureInput}>Agregar</button>
      

      <h3>Listado de Colaboradores</h3>
      <ul className="list">
        {array.filter((user) => user.nombre.toLowerCase().includes(colaborador))
          .map((user) => (
            <li key={user.id} className="listItem">
              {user.nombre} - {user.correo}
            </li>
          ))}
      </ul>
      </div>
    </>
  );
}

export default App;
