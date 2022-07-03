import React, { useState, useEffect } from 'react'
import Payment from './Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { API } from '../../config'
import axios from 'axios'

const PaymentElement = () => {
    const [stripeApiKey, setStripeApiKey] = useState('')
    
    useEffect(async () => {
        const { data } = await axios.get(`${API}/stripeapikey`)
        setStripeApiKey(data.stripeAPIKey)
    }, [])

    return (

        stripeApiKey &&
        <Elements stripe={loadStripe(stripeApiKey)}>
            <Payment />
        </Elements>

    )
}

export default PaymentElement