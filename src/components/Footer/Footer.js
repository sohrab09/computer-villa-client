import React from 'react';
import './Footer.css'

const getCurrentDate = () => {
    const year = new Date().getFullYear();
    return year;
}
const Footer = () => {
    return (
        <div className="container App footer mt-2 text-danger">
            <p>© All rights reserved by Computer Villa. {getCurrentDate()}</p>
        </div>
    );
};

export default Footer;