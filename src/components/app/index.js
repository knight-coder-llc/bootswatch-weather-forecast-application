import React from 'react';
import { Map } from '../map';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { ForecastFourtyEight } from '../cards';
import { ForeCastSlider } from '../forecastslider';
import { Container, Row, Col } from 'react-bootstrap';
 
export const App = () => {
    return  <Container>
                <Nav />
                <Row className="mt-5">
                    <Col>
                        <h2 className="mb-5" align="center">48 hour forecast</h2>
                        <ForecastFourtyEight />
                    </Col>
                    
                </Row>
                <Row className="mt-5 mb-5">
                    <Col>
                        <h2 className="mb-5" align="center">7 day forecast</h2>
                        <ForeCastSlider />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Map />
                    </Col>
                </Row>
                <Footer />
            </Container>
}