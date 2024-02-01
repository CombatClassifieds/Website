import React from 'react';

export default function Popular_Brands() {
    const brandLinks = [
        { label: 'CamelBak', url: '/camelbak' },
        { label: 'Tru Spec', url: '/tru-spec' },
        { label: 'Gerber', url: '/gerber' },
        { label: 'Oakley', url: '/oakley' },
        { label: 'Benchmade', url: '/benchmade' },
        { label: 'View All', url: '/view-all-brands' },
    ];

    return (
        <ul>
            <li className = 'FooterHeader'>
                Popular Brands
            </li>
            <div className = 'FootGuts'>
                {brandLinks.map((link, index) => (
                    <li key={index} className = 'FooterGuts'>
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </div>
        </ul>
    );
}
