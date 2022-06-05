import React from 'react';
import useItems from '../../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items,setItems]=useItems();
    return (
        <div className='mx-2'>
            {
                items.map(item=><ManageItem key={item._id} item={item}></ManageItem>)
            }
        </div>
    );
};

export default ManageItems;