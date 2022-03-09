// NÃO ESTÁ SENDO UTILIZADO NO MOMENTO
// DEIXEI SALVO APENAS PARA LEMBRAR

import { useState } from "react"; // monitorar estado da variável

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1 ); // setCounter é utilizado para mudar o counter
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}