import React from 'react';
import ContactForm from '../forms/ContactForm';

const Footer = () => {
    return (
        <div className="footer" name="contact">
            <div className="footer__content">
                <h2 className="footer__title title">Skontaktuj się z nami</h2>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Footer;
