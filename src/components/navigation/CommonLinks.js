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
            <li className="common-link"><span className="common-link__content">Kontakt</span></li>
        </ul>
    )
}

export default CommonLinks;
