import React, { useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { CartProvider } from 'react-use-cart';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';
const ModulePaymentOrderSummary = ({ ecomerce, shipping }) => {
    const { cartTotal, items, quantity } = useCart();
    console.log(items);

    const handleLoginSubmit = async (data) => {
        try {
            Router.push('/account/payment');
        } catch (err) {
            console.log(err);
        }
    };
    let listItemsView, shippingView, totalView;

    listItemsView = items.map((item) => (
        <Link href="/product/[pid]" as={`/product/${item?.id}`}>
            <a>
                <strong style={{ width: '120px', fontSize: '14px' }}>
                    {item.title} <span> x {item.quantity} </span>
                </strong>
                <strong className="mr-4"> {item.sizes}</strong>
                <strong>{item.color}</strong>
                <small> QR. {item.quantity * item.price} </small>
            </a>
        </Link>
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
                        QR. {cartTotal}
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
                        QR. {cartTotal}
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
                            <small> QR. {cartTotal} </small>
                        </figcaption>
                    </figure>
                    {shippingView} {totalView}
                </div>
            </div>
        </CartProvider>
    );
};
export default connect((state) => state)(ModulePaymentOrderSummary);
