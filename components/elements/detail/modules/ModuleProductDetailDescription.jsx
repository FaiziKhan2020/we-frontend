import React from 'react';
import Link from 'next/link';

const ModuleProductDetailDescription = ({ product }) => (
    <div className="ps-product__desc">
        <ul className="ps-list--dot">
            <li> {product.Brand_Name} </li>
            <li> {product.title} </li>
            <li> {product.Bar_code} </li>

            {/* <li> Unrestrained and portable active stereo </li>
            <li> Free from the confines of wires and chords </li>
            <li> 20 hours of portable capabilities </li>
            <li>Double - ended Coil Cord with 3.5 mm Stereo Plugs Included</li>
            <li> 3 / 4″ Dome Tweeters: 2 X and 4″ Woofer: 1 X </li> */}
        </ul>
    </div>
);

export default ModuleProductDetailDescription;
