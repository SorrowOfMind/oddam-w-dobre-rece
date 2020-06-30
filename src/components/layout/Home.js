import React from 'react';

import Header from './Header';
import NumbersThreeCols from './PlatformStatistics';
import Steps from './Steps';
import About from './About';
import Organizations from '../organizations/Organizations';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Header />
            <NumbersThreeCols />
            <Steps />
            <About />
            <Organizations />
            <Footer />
        </>
    )
}

export default Home;
