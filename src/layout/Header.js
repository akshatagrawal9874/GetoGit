import React, {useState, useContext} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import './Header.css'

import {Link} from 'react-router-dom';

import {UserContext} from '../context/UserContext';

const Header = () => {
    const context = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className=" brand">Get-o-GitHub</Link></NavbarBrand>
            <NavbarText className="text-white">
                {
                    context.user?.email ? context.user.email : ""
                }
            </NavbarText>
            {/*<img src={"github.png"} />*/}
            <NavbarToggler onClick={toggle} />
            <Collapse  isOpen={isOpen} navbar>
                <Nav className="ml-auto"  navbar>
                    {
                        context.user ? (
                            <NavItem className="logout-box">
                                <NavLink onClick={() => {context.setUser(null)}} className="text-white">Sign-out</NavLink>
                            </NavItem>
                        ) : (
                            <>
                            <NavItem className="boxxx">
                                <NavLink tag={Link} to="/signup" className="text-white boxx">
                                    SignUp
                                </NavLink>
                            </NavItem>
                            <NavItem className="boxxx">
                                <NavLink tag={Link} to="/signin" className="text-white boxx">
                                    SignIn
                                </NavLink>
                            </NavItem>
                            </>
                        )
                    }
                    
                    
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;