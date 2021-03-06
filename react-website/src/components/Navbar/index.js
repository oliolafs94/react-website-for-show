import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>ÓLI ÓLAFSSON</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="resume">Resume</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="game">Snake</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="questions">Questions</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="filtersearch">Filter Search</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar
