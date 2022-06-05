import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    // const [updateQuantity,setUpdateQuantity]=useState(item.quantity);
    useEffect(() => {
        fetch(`https://serene-dawn-01282.herokuapp.com/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])
    // console.log(item);
    const handleDelivered = () => {

        const oldQuantity = parseInt(item.quantity);
        const quantity = oldQuantity - 1;
        console.log(quantity);
        const updatedItem = { quantity};
        const url = `https://serene-dawn-01282.herokuapp.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                alert('Delivered Successful')
            })
    }
    const handleAdd = event => {
        const oldQuantity = parseInt(item.quantity);
        const inputQuantity = parseInt(event.target.addNumber.value);
        const quantity = oldQuantity + inputQuantity;
        const updatedItem = { quantity };
        const url = `https://serene-dawn-01282.herokuapp.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                alert('Items Added')
            })
    }


    return (
        <div className='App mt-3 inventory'>
            <img className='inventory-img' src={item.img} alt="" />
            <h5 className='mt-3'><span className='fw-bold'>Name:</span> {item.name}</h5>
            <p><span className='fw-bold'>Item ID:</span> {item._id}</p>
            <p><span className='fw-bold'>Description:</span> {item.sd}</p>
            <p><span className='fw-bold'>Price:</span> {item.price}</p>
            <p><span className='fw-bold'>Stock Quantity:</span> {item.quantity}</p>
            <p><span className='fw-bold'>Supplier Name:</span> {item.supplier}</p>
            <button className='btn btn-warning' onClick={handleDelivered}>Delivered</button>
            <div className='my-3'>
                <form onSubmit={handleAdd}>
                    <input type="text" name='addNumber' placeholder='Give Quantity' required />
                    <input className='btn btn-primary' type="submit" value="Add" />
                </form>
            </div>
            <Link to='/manage' className='fs-4 fw-bold' to='/manage'>Click Here to go to Manage Inventories</Link>


        </div>
    );
};

export default Inventory;