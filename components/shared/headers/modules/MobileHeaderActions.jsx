import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
// import AccountQuickLinksMobile from './AccountQuickLinksMobile';
import { useCart } from 'react-use-cart';

const MobileHeaderActions = ({ auth, ecomerce }) => {
    const { totalUniqueItems } = useCart();

    // const { cartItems } = ecomerce;
    return (
        <div className="navigation__right">
            <Link href="/shopCartItems/shopCart">
                <a className="header__extra" href="#">
                    <i className="icon-bag2" style={{ color: 'white' }}></i>
                    <span>
                        {/* <i>{cartItems ? cartItems.length : 0}</i> */}
                        <i>{totalUniqueItems}</i>
                    </span>
                </a>
            </Link>
        </div>
    );
};

export default connect((state) => state)(MobileHeaderActions);
