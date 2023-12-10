//React Hooks - Create a single Hook that holds an object
//12/5/23

import { useState } from 'react';
import  ReactDOM  from 'react-dom/client';

function Car(){
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    })

    return(
        <>
            <h1>My brand is {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
        </>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />); //