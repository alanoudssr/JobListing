import React, { Fragment } from 'react'

import { Container, DropdownButton, Dropdown, InputGroup, Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"
import { BsSearch, BsChevronDown } from "react-icons/bs";

import logo from "../../../assets/imgs/logo.png"

const Header = () => {
    return (
        <Fragment>
            <Navbar className="bg" expand="lg" variant="dark">
                <Navbar.Brand href="/"><img src={logo} /></Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Open Jobs</Nav.Link>
                            <Nav.Link href="/talents">Talents</Nav.Link>
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
                </Container>
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
                    <Button className="secondary-bg">Gender</Button>
                    <Button className="secondary-bg">Age Range</Button>
                    <Button className="secondary-bg">Skills</Button>
                    <Button className="secondary-bg">Employment Status - Full Time</Button>
                    <Button className="secondary-bg">Payment Type</Button>
                    <Button className="secondary-bg">More Filters <BsChevronDown /></Button>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Header