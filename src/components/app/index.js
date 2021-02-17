import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Map } from '../map';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { ForecastFourtyEight } from '../cards';
import { ForeCastSlider } from '../forecastslider';
import { Container, Row, Col } from 'react-bootstrap';
import { loadForecast } from '../../redux/actions';

const App = (props) => {
    
    return  <Container>
                <Nav />
                <Row className="mt-5">
                    <Col>
                        <h2 className="mb-5" align="center">48 hour forecast</h2>
                        <button onClick={() => (props.loadForecast())}>Click</button>
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

const mapStateToProps = (state) => ({
    forecast: state.forecast,
    client: state.client
})

const mapDispatchToProps = {
    loadForecast
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)