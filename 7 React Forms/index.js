//React Forms - 1 Adding Forms in React
//12/6/23

import { useEffect, useState } from 'react';
import  ReactDOM  from 'react-dom/client';

function MyForm(){
    return(
        <>
            <form>
                <label>Enter your name:
                    <input type='text' />
                </label>
            </form>
        </>   
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />); //