import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './currency.css'
export default function Currency() {
    //api_key = 3f721942cddb3b199905f3aea4bb647d
    const [currenciesList, setCurrenciesList] = useState([]);
    const [frCurrency, setFrCurrency] = useState('');
    const [frAmount, setFrAmount] = useState('');
    const [secCurrency, setSecCurrency] = useState('');
    const [secAmount, setSecAmount] = useState('');
    useEffect(() => {
        Axios
            .get('http://api.currencylayer.com/list?access_key=3f721942cddb3b199905f3aea4bb647d')
            .then(res => {
                setCurrenciesList([res.data, ...Object.keys(res.data.currencies)]);
                // console.log(res.data)
            }).catch(error => console.log(error))

    }, [])
    const onChangeFrCurrency= event => setFrCurrency(event.target.value);

    
console.log(frCurrency);
console.log(frAmount);
console.log(secAmount);
console.log(secCurrency);
    const equavilant = () => {

    }

    return (
        <div className='currency-form-container'>
            <form className='currency-form'>
                <div className='currency-form-group'>
                    <div>
                        <input className='fr-currency' onChange={onChangeFrCurrency} placeholder='Enter The Amount' />
                        <select className='select-fr-currency' onChange={event => setFrCurrency(event.target.value)}  >
                            {currenciesList.slice(1).map(currency => {
                                return (
                                    <option key={currency} value={currency}> {currency} </option>
                                );
                            })}
                            {/* <option key={Math.floor(Math.random()*1000000)} value={currency}> currency </option> */}
                        </select>
                    </div>
                </div>
                <div className='currency-form-group'>
                    <input className='sec-currency' onChange={event => setSecAmount(event.target.value)} placeholder='Enter The Amount' />
                    <select className='select-sec-currency' onChange={event => setSecCurrency(event.target.value)} >
                        {currenciesList.slice(1).map(currency => {
                            return (
                                <option key={currency} value={currency}> {currency} </option>
                            );
                        })}
                        {/* <option key={Math.floor(Math.random()*1000000)} value={currency}> currency </option> */}
                    </select>
                </div>
            </form>
        </div>
    )
}
