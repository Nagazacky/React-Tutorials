//React Hooks - 2 useEffect - second parameter [] = runs only the first render
//12/5/23

import { useEffect, useState } from 'react';
import  ReactDOM  from 'react-dom/client';

function Timer(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    return(
        <>
            <h1>I've rendered {count} times!</h1>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />); //