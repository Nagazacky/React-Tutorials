//Ternary Operator
//12/4/23

import React from 'react';
import  ReactDOM  from 'react-dom/client';

function MadeGoal(){
    return alert("Goal!");
}

function MissedGoal(){
    return alert("Missed!");
}

function Goal(props){
    const isGoal = props.isGoal;

    return(
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal = {false}/>);