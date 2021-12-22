import React from 'react'
import CurrencyForm from './CurrencyForm'
import CurrencyList from './CurrencyList'
export default function Currency() {
    return (
        <div className='currency-app'>
            <CurrencyForm />
            <CurrencyList />
        </div>
    )
}

