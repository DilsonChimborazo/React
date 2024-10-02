import React, { useState } from "react"

const LoginForm=()=>{
const [nombre, setNombre] = useState("")
const [nombreEnviado, setNombreEnviado] = useState("")


const Enviarnombre = (event) => {
    event.preventDefault()
    setNombreEnviado(nombre)
}

return (
    <div>
        <form onSubmit={Enviarnombre}>
            <div class="my-2 container">
                <label for="nombre">Nombre:</label>
                <input class="form-control" type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
            </div>
            <button class="my-2 btn btn-primary" type="submit">Enviar</button>
        </form>
        <p>Nombre enviado: {nombreEnviado}</p>

    </div>
    );
}

export default LoginForm;
