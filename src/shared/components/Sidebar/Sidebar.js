import React, { Fragment } from 'react'
import './sidebar.css';
import logo from "../../../assets/imgs/logo.png"
import { HiChatAlt2 } from 'react-icons/hi';
import { Link } from 'react-router-dom'

const Sidebar = ({ active }) => {
    return (
        <div className='t-sidebar'>
            <div className='t-flex-row t-flex-column t-flex--start'>
                <a className='m-6' >
                    <Link to='/'>
                        <img className='t-menu-logo' src={logo} />
                    </Link>
                </a>
                <div className='t-flex-row t-flex-column t-flex--start ml-6'>
                    <div className='mb-3 t-sidebar-item'><div className={`t-circle${active === 'General Info' ? '-active' : ''}`}>1</div><span className='ml-2'>General Info</span></div>
                    <div className='mb-3 t-sidebar-item'><div className={`t-circle${active === 'Skills' ? '-active' : ''}`}>2</div><span className='ml-2'>Skills</span></div>
                    <div className='mb-3 t-sidebar-item'><div className={`t-circle${active === 'Appearance' ? '-active' : ''}`}>3</div><span className='ml-2'>Appearance</span></div>
                    <div className='mb-3 t-sidebar-item'><div className={`t-circle${active === 'Credits' ? '-active' : ''}`}>4</div><span className='ml-2'>Credits</span></div>
                    <div className='mb-3 t-sidebar-item'><div className={`t-circle${active === 'Media' ? '-active' : ''}`}>5</div><span className='ml-2'>Media</span></div>
                </div>
            </div>
            <div className='t-sidebar-footer'>
                <div className='t-flex-row t-flex__nowrap t-flex-between'>
                    <HiChatAlt2 className='t-icon-lg mt-m1 mr-2' />
                    <p className='t-sm pl-1'>
                        if you have any questions while filling the form in, welcome to our <Link className='t-link' to="/help">Help Center</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar