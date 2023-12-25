import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const ManageItem = (props) => {
    const [items,setItems]=useItems();
    const { _id, name, img, sd, price, quantity, supplier } = props.item;
    const handleDelete=id=>{
        const proceed=window.confirm('Do you want to Delete?');
        if(proceed){
            const url=`https://warehouse-server-0url.onrender.com/items/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    const remaining=items.filter(item=>item._id!==id);
                    setItems(remaining);
                }
            })
        }
    }
    return (
        <div className='App border border-warning rounded my-4 p-2'>
            <img className='inventory-img'  src={img} alt="" />
            <h5 className='mt-3'><span className='fw-bold'>Name:</span> {name}</h5>
            <p><span className='fw-bold'>Description:</span> {sd}</p>
            <p><span className='fw-bold'>Price:</span> {price}</p>
            <p><span className='fw-bold'>Stock Quantity:</span> {quantity}</p>
            <p><span className='fw-bold'>Supplier Name:</span> {supplier}</p>
            <button onClick={()=>handleDelete(_id)} className='btn btn-danger'>Delete Item</button>
            <Link to='/add' className='btn btn-warning'>Add New Item</Link>
            
            
        </div>
    );
};

export default ManageItem;