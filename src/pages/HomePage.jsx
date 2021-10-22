import React, {useState} from 'react'
import MobileMenu from '../components/MobileMenu/IndexMobileMenu';
import NavBar from '../components/NavBar/IndexNavBar';
import SearchSection from '../components/SearchSection/SearchIndex';



const HomePage = () => {
  
    const [toggleMenu, setToggleMenu] = useState(false);

    const showMobileMenu = () =>{
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    };

    return (
        <div>
            <NavBar showMobileMenu={showMobileMenu}/>
            <MobileMenu toggleMenu={toggleMenu} showMobileMenu={showMobileMenu} />
            <SearchSection />
        </div>
    )
}

export default HomePage;
