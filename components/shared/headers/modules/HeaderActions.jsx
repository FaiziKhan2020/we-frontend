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
                    className=""
                    style={{
                        color: 'black',
                        fontSize: '20px',
                        display: 'flex',
                        cursor: 'pointer',
                    }}>
                    <li className="mr-5">Shop</li>
                    <li className="mr-5">Offers</li>
                    <li className="mr-5">FAQ</li>
                    <li className="mr-5">Contact</li>
                </ul>
            </div>
            <Link href="/shopCartItems/shopCart">
                <MiniCart />
            </Link>
        </div>
    );
};

export default connect((state) => state)(HeaderActions);
