import React, { useEffect, useState, Fragment } from 'react'
import { getJobs } from '../../requests/api'
import { Container } from 'react-bootstrap'
import logo from '../../assets/imgs/logo.png'
import Header from '../../Header'
import { Link } from 'react-router-dom'
import { BsFillBookmarkFill, BsFillGridFill, BsList } from 'react-icons/bs';
import classNames from 'classnames'

const List = () => {

    const [jobs, setJobs] = useState([])
    const [bookmarks, setBookmarks] = useState([])
    const [grid, setGrid] = useState(false)

    const arr = ["Wordwall",
        "Onna",
        "Strategic Financial Solutions",
        "Global Canopy",
        "CompuGroup Medical SE & Co. KGaA",
        "Element 84, Inc.", "Neteffects",
        "CompuGroup Medical SE & Co. KGaA",
        "Valve and Meter", "CircleBlack, Inc",
        "Teamshares", "Intersog",
        "Interledger Foundation",
        "Stony Brook University",
        "EventMobi", "Relationship One",
        "Ignitia AB", "TeleSoftas",
        "Children's Miracle Network Hospitals",
        "Open Cosmos"]

    useEffect(() => {
        getJobs()
            .then((results) => {
                setJobs(results.filter(job => !arr.includes(job.company)))
            })
    }, [])


    const renderJobs = () => {

        return jobs.map(job => {
            return (
                <div className='t-card t-link t-col-4' >
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
                    <div className='t-tag-card mb-3'>{job.type}</div>
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
                        <span>{`${jobs.length} jobs found`}</span>
                        <div className='t-flex-row m-0'>
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
                        't-flex-column': grid
                    })}>
                        {renderJobs()}
                    </div>
                </Container>
            </div>
        </Fragment>
    )

}

export default List