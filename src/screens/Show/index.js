import React, { useState, Fragment, useRef } from 'react'
import { MdEdit, MdCancel } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './show.css';
import profile from "../../assets/imgs/profile.jpg"

import Sidebar from '../../shared/components/Sidebar/Sidebar'
import ErrorText from '../../shared/components/ErrorText/ErrorText'

import { hasNumbers } from './helpers'

import { postForm } from '../../requests/api'

const Show = ({ match }) => {

    const uploadRef = useRef()
    const [avatar, setAvatar] = useState('')
    const [titleField, setTitleField] = useState('')
    const [overviewField, setOverviewField] = useState('')
    const [fileField, setFileField] = useState('')
    const [countryField, setCountryField] = useState('')
    const [cityField, setCityField] = useState('')
    const [privateField, setPrivateField] = useState(false)

    const [titleFieldErr, setTitleFieldErr] = useState('')
    const [overviewFieldErr, setOverviewFieldErr] = useState('')
    const [countryFieldErr, setCountryFieldErr] = useState('')
    const [cityFieldErr, setCityFieldErr] = useState('')
    const [countryNumErr, setCountryNumErr] = useState('')
    const [cityNumErr, setCityNumErr] = useState('')

    const notify = (type, msg) => toast(msg, { type: type === 'err' ? toast.TYPE.ERROR : toast.TYPE.INFO });

    const handleChange = (e) => {
        setFileField(e.target.files[0])
        setAvatar(URL.createObjectURL(e.target.files[0]))
    }

    const submitForm = async () => {

        const res = await postForm(
            {
                titleField,
                overviewField,
                fileField,
                countryField,
                cityField,
                privateField
            })
        if (res === 'err') {
            notify('err', 'Error: Try Again')
        } else {
            notify('success', "Submitted Successfully")
        }

    }

    const validate = () => {

        let errTitle = titleField === ''
        let errOverview = overviewField === ''
        let errCountry = countryField === ''
        let errCity = cityField === ''
        let errCountryNum = hasNumbers(countryField)
        let errCityNum = hasNumbers(cityField)

        setTitleFieldErr(errTitle)
        setOverviewFieldErr(errOverview)
        setCountryFieldErr(errCountry)
        setCityFieldErr(errCity)
        setCountryNumErr(errCountryNum)
        setCityNumErr(errCityNum)

        if (!errTitle && !errOverview && !errCountry && !errCity && !errCountryNum && !errCityNum) {
            submitForm()
        }

    }

    const clearForm = () => {
        setAvatar('')
        setTitleField('')
        setOverviewField('')
        setFileField('')
        setCountryField('')
        setCityField('')
        setPrivateField(false)
        setTitleFieldErr('')
        setOverviewFieldErr('')
        setCountryFieldErr('')
        setCityFieldErr('')
        setCountryNumErr('')
        setCityNumErr('')
    }

    const { title } = match.params

    return (
        <Fragment>
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

            <Sidebar active='General Info' />
            <div className='t-container'>
                <div className='t-section'>
                    <h1 className='t-f-title'>
                        {title}
                    </h1>
                    <p>
                        This information makes your account more personalized and helps us connect you to the right company.
                    </p>
                </div>
                <div className='t-section'>
                    <h3 className='t-section__header'>General Information</h3>
                    <div className="t-form-row override">
                        <div >
                            <div className="t-form-group">
                                <label htmlFor="title" className="t-form-group__label">Professional/Working Title</label>
                                <div className="t-form-input t-form-input__lg">
                                    <input value={titleField} className={`t-control ${titleFieldErr ? 't-control__error' : ''}`} onChange={(e) => setTitleField(e.target.value)} type="text" name="title" id="" />
                                    {titleFieldErr && (
                                        <ErrorText>
                                            Field cannot be empty
                                        </ErrorText>
                                    )}
                                </div>
                            </div>
                            <div className="t-form-group mt-3">
                                <label htmlFor="overview" className="t-form-group__label">Professional Overview</label>
                                <div className="t-form-input t-form-input__lg">
                                    <textarea value={overviewField} onChange={(e) => setOverviewField(e.target.value)} className={`t-control pt-2 t-control-area ${overviewFieldErr ? 't-control__error' : ''}`} name="overview" id="" />
                                    {overviewFieldErr && (
                                        <ErrorText>
                                            Field cannot be empty
                                        </ErrorText>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="t-form-group">
                            <div className='t-upload' >
                                <img className='t-avatar' src={avatar === '' ? profile : avatar} alt="" />
                                <span onClick={() => uploadRef.current.click()} className='t-file-button'>
                                    <MdEdit /> Edit
                                </span>
                                <span onClick={() => setAvatar('')} className='t-file-remove'>
                                    <MdCancel /> Remove
                                </span>
                            </div>
                            <input accept='image/png, image/jpg, image/jpeg, image/svg' onChange={handleChange} ref={uploadRef} style={{ 'display': 'none' }} type="file" name="avatar" id="" />
                        </div>
                    </div>
                </div>
                <div className='t-section'>
                    <h3 className='t-section__header'>Contact Details</h3>
                    <div className="t-form-row override">
                        <div className="t-form-group">
                            <label htmlFor="country" className="t-form-group__label">Country</label>
                            <div className="t-form-input">
                                <input value={countryField} className={`t-control ${countryFieldErr || countryNumErr ? 't-control__error' : ''}`} onChange={(e) => setCountryField(e.target.value)} type="text" name="country" id="" />
                                {(countryFieldErr || countryNumErr) && (
                                    <ErrorText>
                                        {countryFieldErr ? 'Field cannot be empty' : 'Cannot contain numbers'}
                                    </ErrorText>
                                )}
                            </div>
                        </div>
                        <div className="t-form-group ">
                            <label htmlFor="city" className="t-form-group__label">City</label>
                            <div className="t-form-input">
                                <input value={cityField} className={`t-control ${cityFieldErr || cityNumErr ? 't-control__error' : ''}`} onChange={(e) => setCityField(e.target.value)} type="text" name="city" id="" />
                                {(cityFieldErr || cityNumErr) && (
                                    <ErrorText>
                                        {cityFieldErr ? 'Field cannot be empty' : 'Cannot contain numbers'}
                                    </ErrorText>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='t-section t-notice'>
                    <div className='t-flex-row t-flex--start t-flex__nowrap t-flex-start'>
                        <input value={privateField} type="checkbox" onClick={() => setPrivateField(!privateField)} name="" id="" />
                        <h6 className='ml-3'>Make your profile private</h6>
                    </div>
                    <p className='ml-4 mt-2 t-notice-text'>
                        If you don't want your profile to be visible in search results, you can make it private. You will still be able to apply for a job directly and be visible for the employer.
                    </p>
                </div>
                <div className='t-section'>
                    <div className='t-form-row t-flex-end'>
                        <button className='t-btn t-btn-reverse' onClick={() => clearForm()}>Cancel</button>
                        <button className='ml-3 t-btn' onClick={() => validate()}>Next Step</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Show