import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItems = () => {
    const handleAddItem=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const img=event.target.img.value;
        const sd=event.target.sd.value;
        const price=event.target.price.value;
        const quantity=event.target.quantity.value;
        const supplier=event.target.supplier.value;
        const items={name,img,sd,price,quantity,supplier};
        fetch('https://warehouse-server-0url.onrender.com/items',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(items)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Items Added Successfully')
        })
        

    }
    return (
        
            <div className='w-50 mx-auto my-4'>
                <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name='name' placeholder="Enter Item Name" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name='img' placeholder="Enter Image URL" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name='sd' placeholder="Short Description" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name='price' placeholder="Enter Item Price" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name='quantity' placeholder="Quantity" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name='supplier' placeholder="Enter Supplier Name" required/>
                </Form.Group>
                
                

                
                <Button variant="primary" type="submit">
                    Add Item
                </Button>
            </Form>
            </div>
    );
};

export default AddItems;