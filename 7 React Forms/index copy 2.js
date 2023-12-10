//React Forms - 3 Submitting Forms
//12/6/23

import { useEffect, useState } from 'react';
import  ReactDOM  from 'react-dom/client';

function MyForm(){
    const [name, setName] = useState("");

    const handleSubmit = (event) => {   //event handler for the onSubmit attribute.
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input type='submit' />
                </label>
            </form>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />); //