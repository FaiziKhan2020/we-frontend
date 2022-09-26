import React from 'react';
import Link from 'next/link';
// import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;

    if (product.is_sale) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">&{product.sale_price}</del>QR.{' '}
                {product.price}
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">QR. {product.price}</h4>;
    }
    return (
        <header>
            <h1>{product.title}</h1>
            <div className="ps-product__meta">
                <p>Brand:</p>
                {product.title}
            </div>
            {priceView}
        </header>
    );
};

export default ModuleDetailTopInformation;
