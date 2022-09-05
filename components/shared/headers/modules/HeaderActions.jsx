import React from 'react';
import { connect } from 'react-redux';
import MiniCart from '~/components/shared/headers/modules/MiniCart';
import Logo from '~/components/elements/common/SuperMart';
import Link from 'next/link';

const HeaderActions = ({ ecomerce, auth }) => {
    return (
        <div className="header__actions">
            <div>
                <ul
                    className="ps-list--link"
                    style={{
                        color: 'black',
                        fontSize: '20px',
                        display: 'flex',
                        cursor: 'pointer',
                    }}>
                    <Link href="/shop">
                        <li className="mr-5">
                            <a> Shop</a>
                        </li>
                    </Link>
                    <li className="mr-5">
                        <a> Offers</a>
                    </li>
                    <li className="mr-5">
                        <a> FAQ</a>
                    </li>
                    <li className="mr-5">
                        <a> Contact</a>
                    </li>
                </ul>
            </div>
            <Link href="/shopCartItems/shopCart">
                <MiniCart />
            </Link>
        </div>
    );
};

export default connect((state) => state)(HeaderActions);
