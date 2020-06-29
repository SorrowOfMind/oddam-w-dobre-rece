import React from 'react';

import Header from './Header';
import NumbersThreeCols from './PlatformStatistics';
import Steps from './Steps';
import About from './About';

const Home = () => {
    return (
        <>
            <Header />
            <NumbersThreeCols />
            <Steps />
            <About />
        </>
    )
}

export default Home
