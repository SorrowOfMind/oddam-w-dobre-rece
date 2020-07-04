import React from 'react';

import HomeHeader from './HomeHeader';
import NumbersThreeCols from './PlatformStatistics';
import Steps from './Steps';
import About from './About';
import Organizations from '../organizations/Organizations';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <HomeHeader />
            <NumbersThreeCols />
            <Steps />
            <About />
            <Organizations />
            <Footer />
        </>
    )
}

export default Home;
