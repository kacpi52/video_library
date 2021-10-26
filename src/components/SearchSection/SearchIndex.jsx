import React, {useState , useEffect} from 'react'
import './stylingSearchSection.css';
import { searchByTitle } from '../../lib/apiService';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {FaStar} from 'react-icons/fa';

const SearchSection = () => {
const [movieObj, setMovieObj] = useState([]);
const [titleInput, setTitleInput] = useState();
const [titleHandler , setTitleHandler] = useState('green mile');
let movieRating = 0;
let starsQuantity = [];


const keyHolder =(event) => {
    if(event.key ==='Enter'){
        setTitleHandler(titleInput);
        console.log('key pressed')
    }
}
const changeTitle = (text) => {
    setTitleInput(text.target.value)
};

const submitHandler = (event) => {
    event.preventDefault();
    setTitleHandler(titleInput);
};

useEffect(async () => {
    const ApiResp = await searchByTitle(titleHandler);
    setMovieObj(ApiResp);
    

}, [titleHandler]);

    movieRating = parseInt(movieObj.Metascore, 10)/20;
    console.log(movieObj);
    for (let index = 0; index < 5; index++) {
        starsQuantity.push(<FaStar color={movieRating>=index ? 'orange' : 'gray'} />)
        
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
                            <p>{movieObj.Actors}</p>
                            <p className='ratingP'> Rating : {starsQuantity} </p>
                        </div></Col>
                    <Col>
                        <input type='text' className='textInput' onChange={changeTitle} onKeyPress={keyHolder} />
                        <button type='submit' className='sendButton' onClick={submitHandler}> SEARCH</button>
                    </Col>
                </Row>
            </Container>
            </div>
            </>
    )
}

export default SearchSection;
