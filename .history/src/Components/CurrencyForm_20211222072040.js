import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './currency.css'
export default function CurrencyForm(props) {
    const acces_key='3f721942cddb3b199905f3aea4bb647d';
    // const [currenciesList, setCurrenciesList] = useState([]);
    // const [currencyExchange, setCurrencyExchange] = useState([]);
    // const [frCurrency, setFrCurrency] = useState('USD');
    // const [frAmount, setFrAmount] = useState('');
    // const [secCurrency, setSecCurrency] = useState('');
    // const [secAmount, setSecAmount] = useState('');


    // useEffect(() => {
    //     Axios
    //         .get(`http://api.currencylayer.com/list?access_key=${acces_key}`)
    //         .then(res => {
    //             setCurrenciesList([res.data.currencies]);
    //         }).catch(error => console.log('error 3'))
            
    //     }, [])
    // useEffect(() => {
    //     Axios
    //         .get(`http://api.currencylayer.com/list?access_key=${acces_key}`)
    //         .then(res => {
    //             setCurrenciesList([res.data, ...Object.keys(res.data.currencies)]);
    //             // console.log(res.data)
    //         }).catch(error => alert(error))

    // }, [])
// exchange
    // useEffect(() => {
    //     Axios
    //         .get(`http://api.currencylayer.com/live?access_key=${acces_key}`)
    //         .then(res => {
    //             setCurrencyExchange(res.data.quotes);
    //         }).catch(error => alert(error))

    // }, [])
    // console.log(currencyExchange['USD'+'EGP']);
    // // here we change state for the amount and currency
    // const onChangeFrCurrency= event => setFrCurrency(event.target.value);
    // const onChangeSecCurrency= event => setSecCurrency(event.target.value);
    // const onChangeFrAmount= event => setFrAmount(event.target.value);
    // const onChangeSecAmount= event => setSecAmount(event.target.value);



    // const equavilant = () => {

    // }

    return (
        <div className='currency-form-container'>
            <form className='currency-form'>
                <div className='currency-form-group'>
                    <div>
                        <input className='fr-currency' value={props.frAmount} onChange={ev => props.onFrAmountChange(ev.target.value)}  placeholder='Enter The Amount' />
                        <select className='select-fr-currency' value={props.frCurrency} onChange={ev => props.onFrCurrencyChange(ev.target.value)}  >
                            
                        {props.currencies.slice(1).map(currency => {
                            return (
                                <option key={currency} value={currency}> {currency} </option>
                            );
                        })}                              
                            {/* <option key={Math.floor(Math.random()*1000000)} value={currency}> currency </option> */}
                        </select>
                    </div>
                </div>
                <div className='currency-form-group'>
                    <input className='sec-currency' value={props.secAmount} onChange={ev => props.onSecAmountChange(ev.target.value)}  placeholder='Enter The Amount' />
                    <select className='select-sec-currency' value={props.frCurrency} onChange={ev => props.onFrCurrencyChange(ev.target.value)}  >
                        {props.currencies.map(currency => {
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
