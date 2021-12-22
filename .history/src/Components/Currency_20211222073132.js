import React, { useEffect, useState } from 'react'
import CurrencyForm from './CurrencyForm'
import CurrencyList from './CurrencyList'
import Axios from 'axios';
import './currency.css'
export default function Currency() {
    const acces_key = '3f721942cddb3b199905f3aea4bb647d';
    const [currencyExchange, setCurrencyExchange] = useState([]);
    const [frCurrency, setFrCurrency] = useState('SAR');
    const [frAmount, setFrAmount] = useState('');
    const [secCurrency, setSecCurrency] = useState('EGP');
    const [secAmount, setSecAmount] = useState('');

    const [currenciesList, setCurrenciesList] = useState([]);
    

    useEffect(() => {
        Axios
            .get(`http://api.currencylayer.com/list?access_key=${acces_key}`)
            .then(res => {
                setCurrenciesList([res.data]);
            }).catch(error => console.log('error 3'))
            
        }, [])
    // exchange
    useEffect(() => {
        Axios
            .get(`http://api.currencylayer.com/live?access_key=${acces_key}`)
            .then(res => {
                setCurrencyExchange(res.data.quotes);
            }).catch(error => console.log('error2'))

    }, [])
    console.log(currencyExchange['USD' + 'EGP']);
    // here we change state for the amount and currency
    // const onChangeFrCurrency = event => setFrCurrency(event.target.value);
    // const onChangeSecCurrency = event => setSecCurrency(event.target.value);
    // const onChangeFrAmount = event => setFrAmount(event.target.value);
    // const onChangeSecAmount = event => setSecAmount(event.target.value);


    function format(number) {
        return number.toFixed(4);
      }
    
      function onChangeFrAmount(frAmount) {
        setSecAmount(format(frAmount * currencyExchange['USD'+secCurrency] / currencyExchange['USD'+frCurrency]));
        setFrAmount(frAmount);
      }
    
      function onChangeFrCurrency(frCurrency) {
        setSecAmount(format(frAmount * currencyExchange['USD'+secCurrency] / currencyExchange['USD'+frCurrency]));
        setFrAmount(frAmount);
        
      }
    
      function onChangeSecAmount(secAmount) {
        setFrAmount(format(secAmount * currencyExchange['USD'+secCurrency] / currencyExchange['USD'+secCurrency]));
        setSecAmount(secAmount);
        
      }
    
      function onChangeSecCurrency(secCurrency) {
        setFrAmount(format(secAmount * currencyExchange['USD'+secCurrency] / currencyExchange['USD'+secCurrency]));
        setSecAmount(secAmount);
      }
      console.log(frCurrency);
      console.log(frAmount);
      
      console.log(secCurrency);
      console.log(secAmount);
    
    return (
        <div className='currency-app'>
            <CurrencyForm
                onAmountChange={onChangeFrAmount}
                onCurrencyChange={onChangeFrCurrency}
                amount={frAmount}
                currency={frCurrency}
                currencies={Object.keys(currencyExchange)}
            />
            <CurrencyForm
                onAmountChange={onChangeSecAmount}
                onSec\CurrencyChange={onChangeSecCurrency}
                currencies={Object.keys(currencyExchange)}
                secAmount={secAmount}
                secCurrency={secCurrency}
            />
            
            <CurrencyList />
        </div>
    )
}

