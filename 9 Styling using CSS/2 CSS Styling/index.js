import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Hello = () => {
    return <h1>Hello Style!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);
