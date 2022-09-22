import React from 'react';
import Link from 'next/link';
const ProductSearchResult = ({ product }) => {
    return (
        <Link href="/product/[pid]" as={`/product/${product.id}`}>
            <div
                className="ps-product ps-product--wide ps-product--search-result"
                style={{ cursor: 'pointer' }}>
                <div className="ps-product__thumbnail">
                    <img src={product.imgUrl} alt="product" />
                </div>
                <div className="ps-product__content">
                    {product.title}
                    <div className="ps-product__rating"></div>
                    {product.price}
                </div>
            </div>
        </Link>
    );
};
export default ProductSearchResult;
