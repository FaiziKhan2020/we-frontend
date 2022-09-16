import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Checkout from '~/components/partials/account/Checkout';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import { CartProvider } from 'react-use-cart';

const CheckoutPage = () => {
    const breadCrumb = [
        {
            text: 'Checkout Information',
        },
    ];

    // console.log('CBM', 'asd');

    return (
        <CartProvider>
            <PageContainer footer={<FooterDefault />} title="Checkout">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Checkout />
                </div>
            </PageContainer>
        </CartProvider>
    );
};

export default CheckoutPage;
