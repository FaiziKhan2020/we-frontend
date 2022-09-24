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
                    <li className="mr-5">
                        <Link href="/shop">
                            <a>Shop</a>
                        </Link>
                    </li>
                    <li className="mr-5">
                        <a>Home</a>
                    </li>
                    <li className="mr-5">
                        <Link href="/page/faqs">
                            <a>FAQ</a>
                        </Link>
                    </li>
                    <li className="mr-5">
                        <Link href="/page/contact-us">
                            <a>Contact</a>
                        </Link>
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
