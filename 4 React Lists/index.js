//React Lists
//12/4/23

import React from 'react';
import  ReactDOM  from 'react-dom/client';

function Car(props){
    return <li>I am a {props.brand}!</li>
}

function Garage(){
    const cars = ['Ford','BMW','Mustang'];
    return(
        <>
            <h1>Who lives in my garage!</h1>
            <ul>
                {cars.map((car) => <Car brand = {car} />)}
            </ul>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />); //