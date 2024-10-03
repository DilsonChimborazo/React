import React, { useState, useEffect } from "react";

const Reloj = () => {
const [tiempo, settiempo] = useState(new Date());

useEffect(() => {
    const intervalo = setInterval(() => {
        settiempo(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
}, []);

return (
    <div>
        <h1>{tiempo.toLocaleTimeString()}</h1>
    </div>
    );
};

export default Reloj;