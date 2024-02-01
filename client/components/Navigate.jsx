import React from 'react';

export default function Navigate() {
    const navigationLinks = [
        { label: 'Contact Us', url: '/contact' },
        { label: 'Locations', url: '/locations' },
        { label: 'Shipping, Returns & REDACTED', url: '/shipping' },
        { label: 'About Us', url: '/about' },
        { label: 'Size Charts', url: '/size-charts' },
        { label: 'Accessibility', url: '/accessibility' },
        { label: 'Sitemap', url: '/sitemap' },
    ];

    return (
        <>
            <ul>
                <li>
                    <p className='FooterHeader'>Navigate</p>
                </li>
                {navigationLinks.map((link, index) => (
                    <li key={index} className = 'FooterGuts'>
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}
