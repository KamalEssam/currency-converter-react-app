import React from 'react'

export default function Currency() {
    return (
        <div className='currency-form-container'>
            <form className='currency-form'>
                <div className='currency-form-group'>
                    <input className='fr-currency' placeholder='enter The Currency Amount' />
                </div>
                <div className='currency-form-group'>
                    <input className='sec-currency' />
                </div>
            </form>
        </div>
    )
}
