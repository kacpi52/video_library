import React, {useState , useEffect} from 'react'
import './stylingSearchSection.css';
import { searchByTitle } from '../../lib/apiService';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {FaStar} from 'react-icons/fa';

const SearchSection = () => {
const [movieObj, setMovieObj] = useState([]);
//const [movieStarRat, setMovieStarRat ] = useState([]);
let movieRating = undefined;
let starsQuantity = [];
useEffect(async () => {
    const ApiResp = await searchByTitle('Batman');
    setMovieObj(ApiResp);
    

}, []);

    movieRating = parseInt(movieObj.Metascore, 10);
    console.log(movieObj);
    for (let index = 0; index < movieRating/20; index++) {
        console.log(index);
        starsQuantity[index]=<FaStar color='orange'/>;
        
    }
    
    // pierwszy film z wyszukiwarka dac do cont fluid
    return (
        <>
            <div className='SearchSectionCon'>
        <Container fluid>
                    <Row >
                    <Col xs={12}>
                        <div className="TitleHeader">{movieObj.Title} {movieObj.Year}</div>
                    </Col>
                    <Col xs={6} > 
                        <Image src={movieObj.Poster} rounded fluid/>
                        
                    </Col>
                    <Col  xs={6}><div className="Description">
                            <p>{movieObj.Plot}</p>
                            <p>Rating : {map(starsQuantity)} </p>
                        </div></Col>
                    <Col>INPUT</Col>
                </Row>
            </Container>
            </div>
            </>
    )
}
 // tu mi jebie konsola ze tu funkcja zwraca obiekt itd na tym onclicku p1
export default SearchSection;
