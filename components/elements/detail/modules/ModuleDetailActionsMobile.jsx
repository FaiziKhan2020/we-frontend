import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';

const ModuleDetailActionsMobile = ({ product }) => {
    const { addItem } = useCart();
    const Router = useRouter();

    function handleBuynow(e) {
        e.preventDefault();

        addItem({
            id: product.id,
            price: product.price,
            title: product.title,
            imgUrl: product.imgUrl,
            // sizes: product.sizes,
        });

        setTimeout(function () {
            Router.push('/shopCartItems/shopCart');
        }, 1000);
    }
    // console.log(addItem);
    return (
        <div>
            <a
                className="ps-btn"
                onClick={(e) => handleBuynow(e)}
                style={{ color: 'white' }}>
                Buy Now
            </a>
        </div>
    );
};

export default connect((state) => state)(ModuleDetailActionsMobile);
