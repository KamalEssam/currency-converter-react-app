import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './currency.css'
export default function Currency() {
    const acces_key='3f721942cddb3b199905f3aea4bb647d';
    const [currenciesList, setCurrenciesList] = useState([]);
    const [currencyExchange, setCurrencyExchange] = useState([]);
    const [frCurrency, setFrCurrency] = useState('');
    const [frAmount, setFrAmount] = useState('');
    const [secCurrency, setSecCurrency] = useState('');
    const [secAmount, setSecAmount] = useState('');


    useEffect(() => {
        Axios
            .get(`http://api.currencylayer.com/list?access_key=${acces_key}`)
            .then(res => {
                setCurrenciesList([res.data, ...Object.keys(res.data.currencies)]);
                // console.log(res.data)
            }).catch(error => console.log(error))

    }, [])
// exchange
    useEffect(() => {
        Axios
            .get(`http://api.currencylayer.com/live?access_key=${acces_key}`)
            .then(res => {
                setCurrencyExchange([res.data]);
                 console.log()
            }).catch(error => console.log(error))

    }, [])
    // here we change state for the amount and currency
    const onChangeFrCurrency= event => setFrCurrency(event.target.value);
    const onChangeSecCurrency= event => setSecCurrency(event.target.value);
    const onChangeFrAmount= event => setFrAmount(event.target.value);
    const onChangeSecAmount= event => setSecAmount(event.target.value);



    const equavilant = () => {

    }

    return (
        <div className='currency-form-container'>
            <form className='currency-form'>
                <div className='currency-form-group'>
                    <div>
                        <input className='fr-currency' onChange={onChangeFrAmount} placeholder='Enter The Amount' />
                        <select className='select-fr-currency' onChange={onChangeFrCurrency}  >
                            
                                    <option value='USD'> USD </option>
                              
                            {/* <option key={Math.floor(Math.random()*1000000)} value={currency}> currency </option> */}
                        </select>
                    </div>
                </div>
                <div className='currency-form-group'>
                    <input className='sec-currency' onChange={onChangeSecAmount} placeholder='Enter The Amount' />
                    <select className='select-sec-currency' onChange={onChangeSecCurrency} >
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
