import React from 'react';
import  ReactDOM  from 'react-dom/client';



function Football(){ //Component
    const shoot = () => { //function 
        alert ("Great shot!");
    }
    return(
        <button onClick={shoot}>Take the Shot!</button> //event
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);