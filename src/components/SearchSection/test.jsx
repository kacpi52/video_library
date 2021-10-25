import React, { useState, useEffect } from 'react'
import './stylingSearchSection.css'
import { searchByTitle } from '../../lib/apiService'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { FaStar } from 'react-icons/fa'

const SearchSection = () => {
    const [movieObj, setMovieObj] = useState([])
    //const [movieStarRat, setMovieStarRat ] = useState([]);
    let movieRating = 0

    useEffect(async () => {
        const ApiResp = await searchByTitle('Batman')
        setMovieObj(ApiResp)
    }, [])

    movieRating = parseInt(movieObj.Metascore, 10) / 20 //ratings are from 0->100
    let starsQuantity = []
    for (let index = 0; index < 5; index++) {
        starsQuantity.push(
            <FaStar color={index <= movieRating ? 'orange' : 'grey'} />
        )
    }

    // pierwszy film z wyszukiwarka dac do cont fluid
    return (
        <>
            <div className="SearchSectionCon">
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <div className="TitleHeader">
                                {movieObj.Title} {movieObj.Year}
                            </div>
                        </Col>
                        <Col xs={6}>
                            <Image src={movieObj.Poster} rounded fluid />
                        </Col>
                        <Col xs={6}>
                            <div className="Description">
                                <p>{movieObj.Plot}</p>
                                <p>
                                    Rating :{' '}
                                    {starsQuantity.map((JsxElem, i) => (
                                        <JsxElem key={i} />
                                    ))}{' '}
                                </p>
                            </div>
                        </Col>
                        <Col>INPUT</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
// tu mi jebie konsola ze tu funkcja zwraca obiekt itd na tym onclicku p1
export default SearchSection