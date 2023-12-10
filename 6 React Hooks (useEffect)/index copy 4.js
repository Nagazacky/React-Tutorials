//React Hooks - useEffect - Effect Cleanup, by including a return function at the end of the useEffect Hook.
//12/5/23

import { useEffect, useState } from 'react';
import  ReactDOM  from 'react-dom/client';

function Timer(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        });

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <h1>I've rendered {count} times!</h1>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />); //