import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const CheckOut = ({ price, id }) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('access-token')}`,
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setClientSecret(data.clientSecret)
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) return
        const card = elements.getElement(CardElement)
        if (card == null) return

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
            return
        } else {
            setCardError('')
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'no Name',
                        email: user?.email || 'no mail'
                    },
                },
            },
        );
        if (confirmError) {
            // console.log(confirmError);
            setCardError(confirmError.message)
            return
        }
        // console.log(paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const data = {
                email: user?.email,
                courseID: id,
                transactionId: paymentIntent.id,
                date: new Date(),
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`,
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.payment.insertedId && data.updateEnroll.modifiedCount && data.result.modifiedCount) {
                        alert('Congretz!!')
                        navigate('/dashboard')
                    } else {
                        alert('Somming wrong')
                    }
                })
        } else {
            setCardError(paymentIntent.status)
            return
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-5' type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 mt-3">{cardError}</p>}
            {transactionId && <p className="text-green-600">Payment Success, you Transcaction ID: {transactionId}</p>}
        </>
    );
};

export default CheckOut;