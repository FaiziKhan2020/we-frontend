import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import { connect } from 'react-redux';
// import useEcomerce from '~/hooks/useEcomerce';
import CustomCart from '~/components/ecomerce/modules/CustomCart';
import Link from 'next/link';
import CustomCartSummary from '~/components/ecomerce/modules/CustomCartSummary';
import { useRouter } from 'next/router';
import { useCart } from 'react-use-cart';

const ShoppingCartScreen = ({ ecomerce }) => {
    const { emptyCart, cartTotal } = useCart();
    console.log(cartTotal);
    // const { products, getProducts } = useEcomerce();

    // useEffect(() => {
    //     if (ecomerce.cartItems) {
    //         getProducts(ecomerce.cartItems, 'cart');
    //     }
    // }, [ecomerce]);

    const breadCrumb = [
        // {
        //     text: 'Home',
        //     url: '/',
        // },
        {
            text: 'Shopping Cart',
        },
    ];
    const router = useRouter();

    const goToCheckout = () => {
        // if (cartTotal >= 2000) {
        router.push('/account/checkout');
        // } else {
        // alert('Your order is less than 2000');
        // }
    };

    // View
    let contentView;

    {
        contentView = (
            <>
                <div className="ps-section__content">
                    <CustomCart />
                    <div className="ps-section__cart-actions">
                        <Link href="/shop">
                            <a className="ps-btn">Back to Shop</a>
                        </Link>
                    </div>
                </div>
                <div className="ps-section__footer">
                    <div className="row justify-space-between">
                        <div className="col-xl-8 col-lg-4 col-md-12 col-sm-12 col-12 ">
                            <div className="row">
                                <div className="col-lg-6"></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                            <CustomCartSummary />

                            {/* <p>
                                <b>Your Order must be greater than 2000 Rs.</b>
                            </p> */}
                            <button
                                onClick={goToCheckout}
                                className="ps-btn ps-btn--fullwidth">
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Shopping Cart">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="ps-section--shopping ps-shopping-cart">
                        <div className="container">
                            {/* <div className="ps-section__header">
                                <h1>Shopping Cart</h1>
                            </div> */}
                            {contentView}
                        </div>
                    </div>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default connect((state) => state)(ShoppingCartScreen);
