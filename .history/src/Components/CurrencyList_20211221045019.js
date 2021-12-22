import React, { useEffect, useState } from 'react'
import Axios from 'axios';
export default function Currency() {
    //api_key = 04078e60-6206-11ec-a513-c3ab8a51dcff
    const [currenciesList, setCurrenciesList] = useState([]);
    useEffect(() => {
        Axios
            .get('http://api.currencylayer.com/list?access_key=3f721942cddb3b199905f3aea4bb647d')
            .then(res => {
                setCurrenciesList([res.data, ...Object.keys(res.data.currencies)]);
                // console.log(res.data)
            }).catch(error => console.log(error))

    }, [])
    // const filteredCurrencies=currenciesList.filter(currenc =>
    //     currenc.toLowerCase()
    //     );
    //  console.log(currenciesList)
    return (
        <div className='currency-form-container'>
            <form className='currency-form'>
                <div className='currency-form-group'>
                    <div>
                        <input className='fr-currency' placeholder='enter The Currency Amount' />
                    </div>
                    <div>
                        <select className='select-fr-currency' >
                            {currenciesList.map(currency => {

                                return (
                                    <option value={currency}>{currency}</option>
                                );
                            })}

                        </select>
                    </div>

                </div>
                <div className='currency-form-group'>
                    <input className='sec-currency' placeholder='enter The Currency Amount' />
                </div>
            </form>
        </div>
    )
}
