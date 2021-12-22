import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './currency.css'
export default function Currency() {
    //api_key = 3f721942cddb3b199905f3aea4bb647d
    const [currenciesList, setCurrenciesList] = useState([]);
    useEffect(() => {
        Axios
            .get('http://api.currencylayer.com/list?access_key=3f721942cddb3b199905f3aea4bb647d')
            .then(res => {
                setCurrenciesList([res.data, ...Object.keys(res.data.currencies)]);
                // console.log(res.data)
            }).catch(error => console.log(error))

    }, [])

    return (
        <div className='currency-list-container'>
        
        </div>
    )
}
