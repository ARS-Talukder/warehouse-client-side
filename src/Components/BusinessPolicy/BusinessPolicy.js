import React from 'react';
import './BusinessPolicy.css'

const BusinessPolicy = () => {
    return (
        <div className='mx-2'>
            <h2 className='text-center text-warning fw-bold my-4'>Our Policy</h2>
            <div className='policy-container'>
                <h5 className='my-2'>All of our products are original. Reputation is our main asset. We can not consider in this. So, please give us all the original and branded products. If any supplier tries to do worng We must take take the step against them. We believe in original and we are original.   </h5>
                <h5>Customers are very satisfied with our products inspite of higher range price. Because, products are the best</h5>
                <h5 className='my-4'>For customer review, We have decided that There are no sacrifice in original. Nothing can replace original. So, Please give us Original</h5>
                <div className='thank-container'>
                    <h4 className='text-danger fw-bold'>Thank You</h4>
                </div>
            </div>
        </div>
    );
};

export default BusinessPolicy;