import React,{useEffect ,useState } from 'react'
import Axios from 'axios';
export default function Currency() {
    
    const [currenciesList,setCurrenciesList]=useState([]);
    useEffect(()=>{
        Axios.get().then().catch()
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
