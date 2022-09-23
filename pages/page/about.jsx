import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
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
                                The best online shoping store in Qatar is
                                qfashiontrends.com. Anywhere in Doha can receive
                                our deliveries for free.
                            </p>
                            <p>
                                We at Qfashiontrends are committed to making it
                                possible for customers to find a variety of
                                products at affordable costs. Our platform
                                provides user-friendly services that guarantee
                                quick answers to any questions that our
                                consumers could have.
                            </p>
                            <p>
                                <b
                                    className="pr-4"
                                    style={{
                                        fontSize: '18px',
                                        color: 'black',
                                    }}>
                                    Vision:
                                </b>
                                To be the QATAR's top customer-centric business
                                where clients can find whatever they would want
                                to buy online and choose from a huge variety of
                                products at affordable costs.
                            </p>
                            <b
                                className="pr-4"
                                style={{
                                    fontSize: '18px',
                                    color: 'black',
                                }}>
                                Mission:
                            </b>
                            To offer customers the greatest online shopping
                            portal possible.
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default AboutUs;
