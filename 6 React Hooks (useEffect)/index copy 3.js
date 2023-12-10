//React Hooks - useEffect - that is dependent on a variable. If the count variable updates, the effect will run again.
//12/5/23

import { useEffect, useState } from 'react';
import  ReactDOM  from 'react-dom/client';

function Counter(){
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    return(
        <>
            <h1>Count: {count}</h1>
            <button type='button' onClick={() => setCount((c) => c + 1)}>+</button>

            <p>calculation: {calculation}</p>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />); //