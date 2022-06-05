import React from 'react';
import './Supplier.css'

const Supplier = (props) => {
    const { _id, name, img, Review } = props.supplier;
    return (
        <div className='border border-warning rounded px-4 my-4'>
            <div className='img-container my-4'>
                <img src={img} alt="" className='supplier-img' />
            </div>
            <div>
                <h5><span className='fw-bold'>Supplier Name:</span> {name}</h5>
                <p><span className='fw-bold'>Supplier Review :</span> {Review}</p>
            </div>

        </div>
    );
};

export default Supplier;