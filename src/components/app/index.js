import React from 'react';
import { Map } from '../map';
import { Nav } from '../nav';
import { Cards } from '../cards';
import { Footer } from '../footer';

export const App = () => {
    return <div className="container">
        <Nav />
        <div className="row mb-5">
            <div className="col-12 mt-5">
                <Cards />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Map />
            </div>
        </div>
        <Footer />
    </div>
}