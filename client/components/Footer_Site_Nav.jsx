import React from 'react'
import Navigate from './Navigate';
import Categories from './Categories';
import Popular_Brands from './Popular_Brands';



export default function FooterSiteNav() {
    return (
        <div className='FooterSiteNav'>
            <Navigate />
            <Categories />
            <Popular_Brands />
        </div>
    );
}
