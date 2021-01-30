import React from 'react'
import './show.css';

const ErrorText = ({ children }) => {
    return (
        <div className='t-form-input__error'>
            <small>{children}</small>
        </div>
    )
}

export default ErrorText