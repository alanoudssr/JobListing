import React, { Fragment, useState } from 'react'

import { Container, DropdownButton, Dropdown, InputGroup, Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { Link } from 'react-router-dom'

import logo from "../../../assets/imgs/logo.png"


const Header = () => {

    const [filters, setFilters] = useState([])

    const handleClick = (e) => {
        if (filters.includes(e.target.id)) {
            setFilters(filters => filters.filter(item => item !== e.target.id))
        } else {
            setFilters(filters => [...filters, e.target.id])
        }
    }

    const getStyle = (id) => {
        return `${filters.includes(id) ? 'secondary-bg-btn secondary-bg-btn-active' : 'secondary-bg-btn'}`
    }

    return (
        <Fragment>
            <Navbar className="bg" expand="lg" variant="dark">
                <Navbar.Brand><Link to='/'><img src={logo} /></Link></Navbar.Brand>
                {/* <Container> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto t-nav-bar">
                        <Nav.Link ><Link to='/' className='t-nav-link'>Open Jobs</Link></Nav.Link>
                        <Nav.Link ><Link to='/talents' className='t-nav-link'>Talents</Link></Nav.Link>
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://reactjs.org/">React</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://react-bootstrap.github.io/">Bootstrap</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Community" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/">Github</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className='t-flex-row t-flex-between'>
                    <Button className="secondary-bg-btn t-btn-lg">Post a Job</Button>
                    <span className='t-login t-menu-link'>Log in</span>
                    <span className='t-menu-link'>Sign Up</span>
                </div>
                {/* </Container> */}
            </Navbar>
            <Navbar className="bg" expand="lg">
                <Container>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="light"
                            title="Anywhere"
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="#">Anywhere</Dropdown.Item>
                            <Dropdown.Item href="#">Riyadh</Dropdown.Item>
                            <Dropdown.Item href="#">Jeddah</Dropdown.Item>
                            <Dropdown.Item href="#">Damam</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" placeholder="Search" />
                        <InputGroup.Append>
                            <Button variant="light">
                                <BsSearch />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Container>
            </Navbar>
            <Navbar className="bg" expand="lg">
                <Container className="mb-4">
                    <Button id='gender' onClick={(e) => handleClick(e)} className={getStyle('gender')}>Gender</Button>
                    <Button id='age' onClick={(e) => handleClick(e)} className={getStyle('age')}>Age Range</Button>
                    <Button id='skill' onClick={(e) => handleClick(e)} className={getStyle('skill')}>Skills</Button>
                    <Button id='status' onClick={(e) => handleClick(e)} className={getStyle('status')}>Employment Status - Full Time</Button>
                    <Button id='type' onClick={(e) => handleClick(e)} className={getStyle('type')}>Payment Type</Button>
                    <Button className="secondary-bg-btn">More Filters <BsChevronDown /></Button>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Header