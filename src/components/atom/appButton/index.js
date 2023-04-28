import React from 'react'
import "./style.css";


export const AppButton = ({title,onClick,type}) => {
  return (
    <div >
      <button type={type} className='login-button'>{title}</button>
    </div>
  )
}


