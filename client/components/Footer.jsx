import React from 'react'
import FooterContactInfo from './Footer_Contact_Info.jsx';
import FooterSiteNav from './Footer_Site_Nav.jsx'

export default function Footer() {
    return (
        <footer className='footer'>
            <FooterContactInfo />
            <FooterSiteNav />
        </footer>
    );
}
