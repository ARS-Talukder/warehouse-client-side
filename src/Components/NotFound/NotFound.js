import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='App notfound'>
            <div>
                <h1 className='text-danger fw-bold'>404</h1>
                <h2 className='text-danger'>Sorry!!!</h2>
                <h3 className='text-danger'>The page is not Found</h3>
            </div>
        </div>
    );
};

export default NotFound;