import React from 'react'
import './StylingMobileMenu.css';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const MobileMenu = ({showMobileMenu ,toggleMenu}) => {
    return (
        <div className={toggleMenu? 'MMContainer' : 'MMContainerHidden'}>
           <FaTimes className='closeIcon' onClick={showMobileMenu}/>
           <div className="MobileMenuList">
                <LinkScroll to='/' onClick={showMobileMenu}>Home</LinkScroll>
                <LinkScroll to='/top10' onClick={showMobileMenu}>Top 10</LinkScroll>
                <LinkScroll to='/aboutUs' onClick={showMobileMenu}>About Us</LinkScroll>
           </div>
            <LinkR to='/signIn' exact className='MobileButton' onClick={showMobileMenu}> Sign In</LinkR>
        </div>
    )
}

export default MobileMenu;
