import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { _id, name, img, sd, price, quantity, supplier } = props.item;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='item'>

            <img src={img} alt="" />
            <h5 className='mt-3'><span className='fw-bold'>Name:</span> {name}</h5>
            <p><span className='fw-bold'>Description:</span> {sd}</p>
            <p><span className='fw-bold'>Price:</span> {price}</p>
            <p><span className='fw-bold'>Stock Quantity:</span> {quantity}</p>
            <p><span className='fw-bold'>Supplier Name:</span> {supplier}</p>
            <button onClick={() => navigateToInventory(_id)} className='btn btn-primary update-btn mt-4'>Stock Update</button>


        </div>
    );
};

export default Item;