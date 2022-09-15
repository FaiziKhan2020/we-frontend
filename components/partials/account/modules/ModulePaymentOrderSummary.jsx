import React, { useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { CartProvider } from 'react-use-cart';
// import { useRouter } from 'next/router';
// import { Form, Input } from 'antd';

import { useCart } from 'react-use-cart';
// import Button from './Button';
import { useRouter } from 'next/router';
const ModulePaymentOrderSummary = ({ ecomerce, shipping }) => {
    const { cartTotal, items, quantity } = useCart();
    console.log(items);
    // const Router = useRouter();
    // const { products, getProducts } = useEcomerce();

    // useEffect(() => {
    //     if (ecomerce.cartItems) {
    //         getProducts(ecomerce.cartItems, 'cart');
    //     }
    // }, [ecomerce]);

    // view

    const handleLoginSubmit = async (data) => {
        try {
            Router.push('/account/payment');
        } catch (err) {
            console.log(err);
        }
    };
    let listItemsView, shippingView, totalView;

    listItemsView = items.map((item) => (
        // <Link href="/" key={item.id}>
        <a>
            <strong>
                {item.title} <span> x {item.quantity} </span>
            </strong>
            <small> Rs. {item.quantity * item.price} </small>
        </a>
        // </Link>
    ));

    if (shipping === true) {
        shippingView = (
            <figure>
                <figcaption>
                    <strong> Shipping Fee </strong> <small> $20 .00 </small>
                </figcaption>
            </figure>
        );
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Total
                    <strong>
                        Rs. {cartTotal}
                        .00
                    </strong>
                </h3>
            </figure>
        );
    } else {
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Total
                    <strong>
                        Rs. {cartTotal}
                        .00
                    </strong>
                </h3>
            </figure>
        );
    }
    return (
        <CartProvider>
            <div className="ps-block--checkout-order">
                <div className="ps-block__content">
                    <figure>
                        <figcaption>
                            <strong> Product </strong> <strong> Size </strong>
                            <strong> Color </strong> <strong> total </strong>
                        </figcaption>
                    </figure>
                    <figure className="ps-block__items">{listItemsView}</figure>
                    <figure>
                        <figcaption>
                            <strong> Subtotal </strong>
                            <small> Rs. {cartTotal} </small>
                        </figcaption>
                    </figure>
                    {shippingView} {totalView}
                    {/* <Button text="Place Order" onclick={handleLoginSubmit} /> */}
                </div>
            </div>
        </CartProvider>
    );
};
export default connect((state) => state)(ModulePaymentOrderSummary);
