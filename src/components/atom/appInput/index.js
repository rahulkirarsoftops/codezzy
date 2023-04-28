import React from 'react'
import "./style.css"

export const AppInput = ({ lable, type, placeholder, value, onchange }) => {
    return (
        <div className='app-input'>
            <p>
                <label>{lable}</label>
            </p>
            <input type={type} placeholder={placeholder} className='input-text' value={value} onChange={onchange} />
        </div>
    )
}


