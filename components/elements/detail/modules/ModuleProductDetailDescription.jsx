import React from 'react';
import Link from 'next/link';

const ModuleProductDetailDescription = ({ product }) => (
    <div>
        <ul className="ps-list--dot">
            <li> {product.title} </li>
            <li> {product.title} </li>
            <li> {product.title} </li>
            <li>{console.log(product.sizes)}</li>
        </ul>
    </div>
);

export default ModuleProductDetailDescription;
