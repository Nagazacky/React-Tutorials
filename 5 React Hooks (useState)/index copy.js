//React Hooks - Create multiple state hooks
//12/5/23

import { useState } from 'react';
import  ReactDOM  from 'react-dom/client';

function Car(){
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return(
        <>
            <h1>My brand is {brand}</h1>
            <p>
                It is a {color} {model} from {year}.
            </p>
        </>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />); //