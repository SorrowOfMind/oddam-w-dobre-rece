import React from 'react';
import {Link as ScrollLink} from 'react-scroll';
import {Link} from 'react-router-dom';

const CommonLinks = () => {
    return (
        <ul className="common-links-list">
            <Link to="/" className="common-link common-link_grey-border"><li >Start</li></Link>
            <ScrollLink to="steps" spy={true} smooth={true} className="common-link"><li>O co chodzi?</li></ScrollLink>
            <ScrollLink to="about" spy={true} smooth={true} className="common-link"><li>O nas</li></ScrollLink>
            <ScrollLink to="organizations" spy={true} smooth={true} className="common-link"><li>Fundacja i organizacja</li></ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} className="common-link"><li>Kontakt</li></ScrollLink>
        </ul>
    )
}

export default CommonLinks;
