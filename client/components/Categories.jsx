import React from 'react';

export default function Categories() {
    const categoryLinks = [
        { label: 'OCS & Ranger School', url: '/ocs-ranger-school' },
        { label: 'ROTC/JROTC Items', url: '/rotc-jrotc-items' },
        { label: 'Clothing', url: '/clothing' },
        { label: 'Uniform Accessories', url: '/uniform-accessories' },
        { label: 'Crests', url: '/crests' },
    ];

    return (
        <ul>
            <li>
                <p className='FooterHeader'>Categories</p>
            </li>
            <div className = 'FooterGuts'>
                {categoryLinks.map((link, index) => (
                    <li key={index}>
                    <a href={link.url} >{link.label}</a>
                    </li>             
                ))}
            </div>
        </ul>
    );
}
