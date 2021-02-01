import React, { useEffect, useState, Fragment } from 'react'
import classNames from 'classnames'

import { BsFillBookmarkFill, BsFillGridFill, BsList } from 'react-icons/bs';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Header from '../../shared/components/Header/Header'
import CustomDropdown from '../../shared/components/CustomeDropdown'
import Subscribe from '../../shared/components/Subscribe/Subscribe'

import logo from '../../assets/imgs/logo.png'
import './list.css';

import { getJobs } from '../../requests/api'


const List = () => {

    const [jobs, setJobs] = useState([])
    const [bookmarks, setBookmarks] = useState([])
    const [grid, setGrid] = useState(false)

    useEffect(() => {
        getJobs()
            .then((results) => { setJobs(results) })
    }, [])


    const renderJobs = () => {

        return jobs.map((job, index) => {
            return (
                <div key={index} className='t-card t-link t-col-4' >
                    <div className='t-flex-row t-flex-between'>
                        {job.company_logo ?
                            <img className='sm t-logo mb-2' width={64} height={64} src={job.company_logo} alt={job.company} />
                            : <img className='sm bg t-logo mb-2' width={64} height={64} src={logo} alt={job.company} />}
                        <BsFillBookmarkFill onClick={() => {
                            if (bookmarks.includes(job.id)) {
                                setBookmarks(bookmarks => bookmarks.filter(item => item !== job.id))
                            } else {
                                setBookmarks(bookmarks => [...bookmarks, job.id])
                            }
                        }}
                            className={classNames('t-icon', {
                                't-icon--active': bookmarks.includes(job.id)
                            })} />
                    </div>
                    <Link to={`/show/${job.title}`} className='mt-2 t-card-header' >
                        <h4 className='t-card-title'>{job.title}</h4>
                    </Link>
                    <h5 className='mt-2 t-card-subtitle'>{job.location}</h5>
                    <div className='t-card-tag mb-3'>{job.type}</div>
                    <p>
                        {job.company}
                    </p>
                    <div className='t-card-footer'>
                        <small className='text-muted'>{job.created_at}</small>
                    </div>
                </div>
            )
        })
    }

    return (
        <Fragment>
            <Header />
            <div className='t-bg'>
                <Container>
                    <div className='t-flex-row t-flex-between pb-1 t-sub-menu'>
                        <span>{`${jobs ? jobs.length : '0'} jobs found`}</span>
                        <div className='t-flex-row m-0'>
                            <span>Sort By: </span>
                            <CustomDropdown />
                            <BsFillGridFill className={classNames('ml-2 t-icon', {
                                't-icon--active': !grid
                            })}
                                onClick={() => setGrid(false)} />
                            <BsList className={classNames('ml-2 t-icon', {
                                't-icon--active': grid
                            })}
                                onClick={() => setGrid(true)} />
                        </div>
                    </div>
                    <div className={classNames('t-flex-row', {
                        't-flex-column': grid,
                        't-flex--start': !grid,
                    })}>
                        <Subscribe />
                        {jobs ? renderJobs() : 'No jobs found'}
                    </div>
                </Container>
            </div>
        </Fragment>
    )

}

export default List