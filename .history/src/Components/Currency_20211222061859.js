import React, { useEffect, useState } from 'react'
import CurrencyForm from './CurrencyForm'
import CurrencyList from './CurrencyList'
import Axios from 'axios';
import './currency.css'
export default function Currency() {
    const acces_key='3f721942cddb3b199905f3aea4bb647d';
    const [currenciesList, setCurrenciesList] = useState([]);
    const [currencyExchange, setCurrencyExchange] = useState([]);
    const [frCurrency, setFrCurrency] = useState('USD');
    const [frAmount, setFrAmount] = useState('');
    const [secCurrency, setSecCurrency] = useState('');
    const [secAmount, setSecAmount] = useState('');


    useEffect(() => {
        Axios
            .get(`http://api.currencylayer.com/list?access_key=${acces_key}`)
            .then(res => {
                setCurrenciesList([res.data, ...Object.keys(res.data.currencies)]);
                // console.log(res.data)
            }).catch(error => alert(error))

    }, [])
// exchange
    useEffect(() => {
        Axios
            .get(`http://api.currencylayer.com/live?access_key=${acces_key}`)
            .then(res => {
                setCurrencyExchange(res.data.quotes);
            }).catch(error => alert(error))

    }, [])
    console.log(currencyExchange['USD'+'EGP']);
    // here we change state for the amount and currency
    const onChangeFrCurrency= event => setFrCurrency(event.target.value);
    const onChangeSecCurrency= event => setSecCurrency(event.target.value);
    const onChangeFrAmount= event => setFrAmount(event.target.value);
    const onChangeSecAmount= event => setSecAmount(event.target.value);



    const equavilant = () => {

    }
    return (
        <div className='currency-app'>
            <CurrencyForm />
            <CurrencyList />
        </div>
    )
}

