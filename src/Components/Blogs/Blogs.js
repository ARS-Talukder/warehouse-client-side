import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='bg-warning mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-start text-danger fw-bold'>Question-1: What is the Difference between javascript and nodejs?</h4>
                <h5 className='text-start text-success fw-bold'>Answer-1 : 1.JavaScript is a programing language but Node js is javascript runtime environment.</h5>
                <h5 className='text-start text-success fw-bold'>2.Javascript is used on the client-side but Node.js is used on the server-side</h5>
                <h5 className='text-start text-success fw-bold'>3.Javascript is used in frontend development but Node.js is used in server-side development.</h5>
                
            </div>
            <div className='bg-warning mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-start text-danger fw-bold'>Question-2:What is the Differences between sql and nosql databases ?</h4>
                <h5 className='text-start text-success fw-bold'>Answer-2 : 1.In sql database all the records are stored in a table but in nosql database all the records are not stored in a table</h5>
                <h5 className='text-start text-success fw-bold'>2.sql is not flexible but nosql is flexible.</h5>
            </div>
            <div className='bg-warning mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-start text-danger fw-bold'>Question-3:When should you use nodejs and when should you use mongodb?</h4>
                <h5 className='text-start text-success fw-bold'>Answer-3 : Node.js is the runtime of JavaScript or JavaScript engine and mongodb is a database engine. When data is needed to store then We will use mongodb. And For storing data in mongodb We will use node.js </h5>

            </div>
        </div>
    );
};

export default Blogs;