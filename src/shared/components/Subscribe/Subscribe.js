import React, { useState } from 'react'
import { BsChevronRight } from 'react-icons/bs';
import { AiFillFire } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

import './subscribe.css'

const Subscribe = () => {

    const [email, setEmail] = useState('Add your email address')

    const notify = () => toast('Subscribed Successfully', { type: toast.TYPE.INFO });

    return (
        <div className='t-card-reverse t-sticky t-col-4' >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='t-flex-row t-flex-between'>
            </div>
            <div className='t-flex-row t-flex-start mt-2' >
                <AiFillFire className='t-icon mt-m1' />
                <h4 className='t-card-title ml-2 t-f-title'>Save Job Alerts</h4>
            </div>
            <p className='t-card-desc'>
                We will send you a letter if new opportunities appear matching your request.
            </p>
            <input className='t-s-input' onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="" />
            <button onClick={() => notify()} className='mt-3 t-btn t-btn-wide t-btn-reverse'>Subscribe <BsChevronRight className='pl-2 t-icon t-icon--active' /></button>
        </div>
    )
}

export default Subscribe;