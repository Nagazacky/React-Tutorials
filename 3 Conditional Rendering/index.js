//React conditional rendering

import React from 'react';
import  ReactDOM  from 'react-dom/client';

function MadeGoal(){
    return alert("Goal!");
}

function MissedGoal(){
    return alert("Missed");
}


function Goal(props){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal/>
    }
    return <MissedGoal />
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Goal isGoal = {false}/>);