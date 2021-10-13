import React from 'react'
import './stylingSearchSection.css';

//http://www.omdbapi.com/?i=tt3896198&apikey=2eb14caf


const SearchSection = () => {
    const apiLink = 'http://www.omdbapi.com/?';
    let title = 't=shrek';
    const apiKey = '&apikey=2eb14caf';

    const apiConnect = async (link , movietitle, key) => {
        let apiConnectFetch = await fetch(link + movietitle + key);
        let apiConnectObj = await apiConnectFetch.json();
        console.log(apiConnectObj);
    };
    return (
        <div className='SearchSection'>
            <h1>SearchSection</h1>
            <p1 onClick = {apiConnect(apiLink,title,apiKey)} > apii</p1>  
        </div>
    )
}
 // tu mi jebie konsola ze tu funkcja zwraca obiekt itd na tym onclicku p1
export default SearchSection;
