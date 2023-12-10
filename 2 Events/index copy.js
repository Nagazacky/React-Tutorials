import React from 'react';
import  ReactDOM  from 'react-dom/client';



function Football(){ //Component
    const shoot = (a) => { //function //Goal! as a parameter in the shoot function.
        alert (a);
    }
    return(
        <button onClick={() => shoot("Goal!")}>Take the Shot!</button> //event
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);