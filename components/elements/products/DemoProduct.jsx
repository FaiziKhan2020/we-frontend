import React from 'react';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import Rating from '~/components/elements/Rating';

const DemoProduct = ({ image, product, title, price }) => {
    return (
        <>
            <div className="row ml-auto justify-content-center">
                <div className="ps-product px-24">
                    <div
                        className="ps-product__thumbnail"
                        style={{
                            margin: 'auto',
                            width: '200px',
                        }}>
                        <img src={image} alt="asd" />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">{title}</a>
                        <div className="ps-product__content">
                            {/* {title} */}
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            Rs. {price}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DemoProduct;
