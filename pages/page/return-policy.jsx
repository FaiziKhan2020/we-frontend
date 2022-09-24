import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import { CartProvider } from 'react-use-cart';
const returnPolicy = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Return policy',
        },
    ];

    return (
        <CartProvider>
            <PageContainer footer={<FooterDefault />} title="Return policy">
                <div className="ps-page--single">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-section--custom">
                        <div className="container">
                            <div className="ps-section__header">
                                <h3>Return Policy</h3>
                            </div>
                            <div className="ps-section__content">
                                <div className="my-4">
                                    <ol>
                                        <li>
                                            If you find our delivered product
                                            with any defect then it will be
                                            returnable.
                                        </li>
                                        <li>
                                            You may return faulty products for
                                            refund within 7 days after delivery.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </CartProvider>
    );
};

export default returnPolicy;
