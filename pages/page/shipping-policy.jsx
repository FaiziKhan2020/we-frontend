import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import { CartProvider } from 'react-use-cart';

const shippingPolicy = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shipping policy',
        },
    ];

    return (
        <CartProvider>
            <PageContainer footer={<FooterDefault />} title="Blank page">
                <div className="ps-page--single">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-section--custom">
                        <div className="container">
                            <div className="ps-section__header">
                                <h3>Shipping Policy</h3>
                            </div>
                            <div className="ps-section__content">
                                <p>Shipping & Delivery</p>
                                <div className="my-4">
                                    <ol>
                                        <li>
                                            Only within Qatar is delivery
                                            service offered.
                                        </li>
                                        <li>
                                            The accuracy of the address and
                                            contact details supplied is
                                            necessary for successful delivery.
                                            To confirm the order and address
                                            before releasing the order, kindly
                                            supply your true and proper contact
                                            information.
                                        </li>
                                        <li>
                                            Please report the problem within 48
                                            hours of delivery if you don't
                                            receive the exact product after it's
                                            been delivered.
                                        </li>
                                        <li>
                                            Orders received on public holidays
                                            and Eid holidays will be processed
                                            the next day.
                                        </li>
                                        <li>
                                            Within 48 hours of placing the order
                                            if the customer doesn't respond to
                                            confirm the order or address then
                                            the order will be immediately
                                            cancelled.
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

export default shippingPolicy;
