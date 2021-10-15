import React, {useState, useEffect} from 'react'
import MobileMenu from '../components/MobileMenu/IndexMobileMenu';
import NavBar from '../components/NavBar/IndexNavBar';
import SearchSection from '../components/SearchSection/SearchIndex';

import {searchByTitle} from  '../lib/apiService.js';

const HomePage = () => {
  const [movieObj, setMovieObj]= useState([])
    const [toggleMenu, setToggleMenu] = useState(false);

    const showMobileMenu = () =>{
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    };
    
    useEffect(async ()=>{
      const apiResp = await searchByTitle('shrek')
      setMovieObj(apiResp)
    },[])
    
    
    console.log('movieObj',movieObj)
    
    
    return (
        <div>
            <NavBar showMobileMenu={showMobileMenu}/>
            <MobileMenu toggleMenu={toggleMenu} showMobileMenu={showMobileMenu} />
            <h1>{movieObj.Title}</h1>
           <span>{movieObj.Year}</span>
            <SearchSection />
        </div>
    )
}

export default HomePage;
