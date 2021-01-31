import React from 'react'

import error from '../../assets/imgs/404.png'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <Container>
            <div className='t-flex-row t-flex-column'>
                <img src={error} alt="" />
                <Link to='/' className='t-btn'>Home</Link>
            </div>
        </Container>
    )
}

export default ErrorPage