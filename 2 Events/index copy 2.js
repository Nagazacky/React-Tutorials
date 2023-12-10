import React from 'react';
import  ReactDOM  from 'react-dom/client';



function Football(){ //Component
    const shoot = (a, b) => { //function //event handlers have access to the React event ("Click")
        //alert(a);
        alert (b.type);
    }
    return(
        <button onClick={(event) => shoot("Goal!", event)}>Take the Shot!</button> //event
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);