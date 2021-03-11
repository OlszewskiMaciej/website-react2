import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: 'white'}}>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={handleClick}>
                        {click ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products'>Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
