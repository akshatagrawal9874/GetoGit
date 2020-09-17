import React, {useState, useContext} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    CardImg
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
            <CardImg top width="10%" src="github.png" alt="Card image cap" />
            <NavbarBrand><Link to="/" className=" brand">GetoGit</Link></NavbarBrand>
            <NavbarText className="text-white">
                {
                    context.user?.email ? context.user.email : ""
                }
            </NavbarText>
        
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