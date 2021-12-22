import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './currency.css'
export default function CurrencyForm(props) {
    return (
        <div className='currency-form-container'>
        <h1 className='currency-text'></h1>
            <form className='currency-form'>
                <div className='currency-form-group'>
                    <div>
                        <input className='fr-currency' value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)}  placeholder='Enter The Amount' />
                        <select className='select-fr-currency' value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}  >
                            
                        {props.currencies.slice(1).map(currency => {
                            return (
                                <option key={currency} value={currency.substring(3,6)}> {currency.substring(3,6)} </option>
                            );
                        })}                              
                            {/* <option key={Math.floor(Math.random()*1000000)} value={currency}> currency </option> */}
                        </select>
                    </div>
                </div>
                
            </form>
        </div>
    )
}
