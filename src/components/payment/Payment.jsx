import React from 'react';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Navigate, useLocation } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {
    const location = useLocation()
    const id = location?.state?.id;
    if (!id || !location?.state?.price) {
        return <Navigate to='/' />
    }
    const total = parseFloat(location?.state?.price)
    const price = parseFloat(total.toFixed(2))
    // console.log(total, location?.state?.price);
    return (
        <div className='my-12'>
            <h2 className="text-3xl font-bold text-center uppercase mb-8">Check Out</h2>
            <div className="w-96 mx-auto border rounded p-5">
                <Elements stripe={stripePromise}>
                    <CheckOut id={id} price={price} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;