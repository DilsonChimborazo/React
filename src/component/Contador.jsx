import React, { useState } from 'react'

function Contador() {
const [contador, setContador] = useState(0)
    return (
    <div>
        <h1>Contador: {contador}</h1>
        <button class="btn btn-success" onClick={() => setContador(contador + 1)}>Aumentar</button>
        <button class="btn btn-danger mx-3" onClick={() => setContador(contador - 1)}>Disminuir</button>
        <button class="btn btn-info" onClick={() => setContador(0)}>Reiniciar</button>
    </div>
    )
}

export default Contador

