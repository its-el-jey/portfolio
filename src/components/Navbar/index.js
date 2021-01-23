import React from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElement';
import { FaEllipsisH } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import img from './lj-logo.png'

const Navbar = ({ toggle }) => {

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  
  return (
    <>
      <Nav >
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}
            initial={{y: -80 }} animate={{y: 0 }} 
            transition={{ delay: '0.5ms', duration: .5, type: 'spring', stiffness: 120 }}
          > <img src={img} alt=""/> </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaEllipsisH />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" 
              smooth={true} duration={500} spy={true} exact='true' offset={-80} 
              >About</NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks to="skills"
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Skills</NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks to="projects"
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Projects</NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks to="contact"
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Contact</NavLinks>
            </NavItem> 
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
