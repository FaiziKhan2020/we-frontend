import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';

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
                            <p>
                                Although the orders can be placed via the
                                website on a 24 hours basis 7 days a week, the
                                delivery of the order will be subject to working
                                days which are Mondays till Saturdays. The
                                Delivery time is from 12 Hours to 24 Hours from
                                the Order Placement date. Orders placed on
                                Saturdays and Sundays will be delivered on the
                                next working day.
                            </p>
                            <p>
                                Delivery will not be made on a Public Holiday.
                            </p>

                            <p>
                                Delivery will be made to the address specified
                                by you on the completed order form.
                            </p>
                            <p>
                                We will deliver your order only at the main
                                entrance of the stated delivery address.
                            </p>
                            <p>
                                dawoodonline.pk reserves the right to Refuse /
                                Cancel any Order which is outside of its Service
                                Area or for any other reason. However, the
                                client will be informed via e-mail OR phone call
                                accordingly.
                            </p>
                            <h5>Delivery Charges</h5>
                            <p>
                                There will be a fixed Delivery Charge of
                                Rs.100/- on every order.
                            </p>
                            <p>
                                Minimum Order amount will be Rs.2,000/- No order
                                below this amount will be entertained.
                            </p>
                            <p>
                                Delivery Charges will vary on order above
                                Rs.10,000/-
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default shippingPolicy;
