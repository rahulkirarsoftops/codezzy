import React from 'react'
import "./style.css";

export const Date = () => {
    return (
        <div className='name'>
            <span>Written by
                <a href='/' >Admin</a>
            </span>
            {"  "}
            <span>
                <i className='fa fa-calendar'></i>
                {" "}May 9,2020
            </span>
        </div>
    )
}
