import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import BlankContent from '~/components/partials/page/Blank';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';

const AboutUs = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'About Us',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Blank page">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-section--custom">
                    <div className="container">
                        <div className="ps-section__header">
                            <h3>About Us</h3>
                        </div>
                        <div className="ps-section__content">
                            <p>
                                About Us We are the pioneers of On Line Cloth
                                Shopping in Qatar.
                            </p>
                            <p>
                                With over 4000 products and over a 100 brands in
                                our catalogue you will find everything you are
                                looking for, from Rice and Pulses, Spices and
                                Seasonings to Packaged products, Beverages,
                                Personal care products â€“ we have it all in our
                                online delivery store.
                            </p>
                            Choose from a wide range of options in every
                            category, exclusively handpicked to help you find
                            the best quality available at the lowest prices.
                            Your order will be delivered right at your doorstep.
                            And to top it all, you can pay cash on delivery. As
                            we choose from among the best and renowned Super
                            Stores and Retail Outlets of Qatar, we can guarantee
                            our customers on timely delivery, No hidden cost and
                            the best quality available.
                        </div>
                    </div>
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default AboutUs;
