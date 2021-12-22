import React,{useEffect ,useState } from 'react'
import Axios from 'axios';
export default function Currency() {
    //api_key = 04078e60-6206-11ec-a513-c3ab8a51dcff
    const [currenciesList,setCurrenciesList]=useState([]);
    useEffect(()=>{
        Axios
            .get(''https://currencylayervolodimir-kudriachenkov1.p.rapidapi.com/getCurrencies')
            .then(res=>{
                setCurrenciesList(res.data);
                console.log(res.data);
            }).catch(error => console.log(error))

    },[])
    console.log()
    return (
        <div className='currency-form-container'>
            <form className='currency-form'>
                <div className='currency-form-group'>
                    <input className='fr-currency' placeholder='enter The Currency Amount' />
                </div>
                <div className='currency-form-group'>
                    <input className='sec-currency' placeholder='enter The Currency Amount' />
                </div>
            </form>
        </div>
    )
}
