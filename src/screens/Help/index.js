import React, { Fragment } from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../../shared/components/Header/Header'

import help from '../../assets/imgs/help.png'


const Help = () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <div className='t-flex-row t-flex-column'>
                    <h1>Support</h1>
                    <img src={help} alt="" />
                    <Link to='/' className='t-btn'>Home</Link>
                </div>
            </Container>
        </Fragment>
    )
}

export default Help