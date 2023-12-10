//React Hooks - Updating Objects and Arrays in State - Use the javascript spread operator ...
//12/5/23

import { useState } from 'react';
import  ReactDOM  from 'react-dom/client';

function Car(){
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const UpdateColor = () => {
        setCar(previousState => {
            return {...previousState, color: "blue"}
        });
    }

    return(
        <>
            <h1>My brand is {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button type='button' onClick={UpdateColor}>Change car color to blue</button>
        </>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />); //