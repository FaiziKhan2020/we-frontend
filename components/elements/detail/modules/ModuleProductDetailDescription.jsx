import React from 'react';

const ModuleProductDetailDescription = ({ product }) => (
    <div>
        <ul className="ps-list--dot">
            <h4>Price: {product.price}</h4>
            <li> {product.title} </li>
            <li> {product.Sub_Cat} </li>
            <li>Size: {product.size} </li>
            <li>Color:{product.color} </li>
        </ul>
        <ul></ul>
    </div>
);

export default ModuleProductDetailDescription;
