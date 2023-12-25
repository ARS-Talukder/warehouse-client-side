import React from 'react';
import Supplier from '../Supplier/Supplier';
import './Suppliers.css'

const Suppliers = () => {
    const suppliers=[
        {_id:1,name:'Ryans',Review:'We are really pleased to do business with ARS Electronics. All the items they take is totally branded and original',img:'https://i.postimg.cc/JnVRC3Rr/ryans.jpg'},
        {_id:2,name:'DCL',Review:'All the items is totally well established. And We have access in this website. So no gathering happens',img:'https://i.postimg.cc/gjGdnYw1/dcl.jpg'},
        {_id:3,name:'Imran Express',Review:'We are really pleased to do business with ARS Electronics. All the items they take is totally branded and original',img:'https://i.postimg.cc/26Qrkq54/imran-express.png'},
    ]
    return (
        <div className='mx-2'>
            <h2 className='text-center text-warning fw-bold my-4'>Suppliers</h2>
            <div className='suppliers'>
                {
                    suppliers.map(supplier=><Supplier key={supplier._id} supplier={supplier}></Supplier>)
                }
            </div>
        </div>
    );
};

export default Suppliers;