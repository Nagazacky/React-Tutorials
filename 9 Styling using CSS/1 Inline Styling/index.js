//Styling React using CSS - 1 Inline Styling - create a style object named myStyle

import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue", //camel case syntax instead of background-color:""
        padding: "10px",
        fontFamily: "Sans-Serif"
    }

    return (
        <>
            <h1 style={myStyle}>Hello Style!</h1>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
