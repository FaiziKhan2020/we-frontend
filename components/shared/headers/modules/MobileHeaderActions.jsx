import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useCart } from 'react-use-cart';

const MobileHeaderActions = () => {
    const { totalUniqueItems } = useCart();

    return (
        <div className="navigation__right">
            <Link href="/shopCartItems/shopCart">
                <a className="header__extra" href="#">
                    <i className="icon-bag2" style={{ color: 'white' }}></i>
                    <span>
                        <i>{totalUniqueItems}</i>
                    </span>
                </a>
            </Link>
        </div>
    );
};

export default connect((state) => state)(MobileHeaderActions);
