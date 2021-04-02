import React from 'react';
import './Footer.css'

const getCurrentDate = () => {
    const year = new Date().getFullYear();
    return year;
}
const Footer = () => {
    return (
        <div className="container App footer mt-2 text-success font-weight: bold">
            <p><strong>© All rights reserved by Computer Villa.</strong> {getCurrentDate()}</p>
        </div>
    );
};

export default Footer;