import React  from 'react'
import './stylingNavBar.css' ;
import { FaBars, FaVideo} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

// przy fabarsie toggle z ternary ? 
const NavBar = ({showMobileMenu}) => {
   
    return (
        
        <div className="NavContainer">
            
            <div className="NavTitle"> 
                <FaVideo className="NavLogo"/>
                VIDEO LIBRARY
            </div>
            <div className="MobileIcon">
                <FaBars   onClick={showMobileMenu}/>                          
            </div>
             <div className="NavMenuList">
                    <LinkScroll to='/'  className='NavLinks'>Home</LinkScroll>
                    <LinkScroll to='/top10'  className='NavLinks'>Top 10</LinkScroll>
                    <LinkScroll to='/aboutUs'  className='NavLinks'>About Us</LinkScroll>
             </div>
                <div className="NavBtnContainer">
                    <LinkR to='/signIn' className="NavBtn" >SIGN IN</LinkR>
                </div>
        </div>
        
    )
}

export default NavBar;
