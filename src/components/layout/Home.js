import React from 'react';

import Header from './Header';
import NumbersThreeCols from './PlatformStatistics';
import Steps from './Steps';
import About from './About';
import Organizations from '../organizations/Organizations';

const Home = () => {
    return (
        <>
            <Header />
            <NumbersThreeCols />
            <Steps />
            <About />
            <Organizations />
        </>
    )
}

export default Home;
