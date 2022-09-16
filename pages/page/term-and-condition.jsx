import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';

const termAndCondition = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Term and Condition',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Term and Conditon">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-section--custom">
                    <div className="container">
                        <div className="ps-section__header">
                            <h3>Terms and Conditions</h3>
                        </div>
                        <div className="ps-section__content">
                            <p>
                                Please read the following terms and conditions
                                very carefully as your use of service is subject
                                to your acceptance of and compliance with the
                                following terms and conditions (Terms).
                            </p>
                            <p>
                                By subscribing to, or using any of our services
                                the User agrees that he/she has read, understood
                                and is bound by the Terms, regardless of how you
                                subscribe to or use the services. If you do not
                                want to be bound by the Terms, you must not
                                subscribe to, or use our services.
                            </p>
                            <p>
                                Dawoodonline.pk hereby disclaims any guarantees
                                of exactness as to the finish and appearance of
                                the final Product as ordered by the user. The
                                quality of any products, Services, information,
                                or other material purchased or obtained by you
                                through the Website may not meet your
                                expectations or may vary in colors as compared
                                to the image shown on product display in online
                                catalog.
                            </p>

                            <p>
                                -- User Account, Password, and Security: You
                                will create a password and account designation
                                upon completing the Website\'s registration
                                process. You are responsible for maintaining the
                                confidentiality of your password and account,
                                and are fully responsible for all activities
                                that occur under your account. You agree to ;
                            </p>
                            <p>
                                (a) immediately notify Dawoodonline.pk of any
                                unauthorized use of your password or account or
                                any other breach of security, and
                            </p>
                            <p>
                                {' '}
                                (b) ensure that you exit from your account at
                                the end of each session.
                            </p>
                            <p>
                                {' '}
                                Dawoodonline.pk cannot and will not be liable
                                for any loss or damage arising from your failure
                                to comply with our Terms Of Service.
                            </p>
                            <p>
                                dawoodonline.pk reserves the right to Reject or
                                Cancel any registration without assigning any
                                reason.
                            </p>
                            <p>
                                - Products may differ from Supplier Images.
                                Where there is a difference between size,
                                quantity, weight or color as mentioned on
                                product image as against the product name /
                                detail, the product stated name / detail will be
                                considered to be correct and final.
                            </p>
                            <p>
                                - Prices for products are described on our
                                Website are obtained from the vendor and can
                                fluctuate at any point of time. These prices are
                                incorporated into these Terms by reference. All
                                prices are in PAK Rupees. Prices, products and
                                Services may change at Dawoodonline.pkâ€™s
                                discretion without any prior notice.
                                Dawoodonline.pk cannot be held liable for any
                                price change and customer has the option to
                                either accept the new prices or cancel the
                                placed order..
                            </p>
                            <p>
                                As dawoodonline.pk is a service provider, where
                                we only make delivery of the ordered products
                                and are not having our own stock, the
                                availability of any product displayed on our
                                website is not guaranteed. In case, the ordered
                                product is not available with our Vendor, we
                                will try to find the product with alternate
                                vendors. Therefore, we cannot guarantee the
                                availability of any displayed product.
                            </p>
                            <p>
                                Delivery of imported products depends upon
                                availability therefore prices and availability
                                are not guaranteed.
                            </p>
                            <p>
                                - Although we will try our utmost to deliver
                                each customer on the specified time, however,
                                circumstances beyond our control may affect
                                Delivery Time for which the company cannot be
                                held liable.
                            </p>
                            <p>
                                - We strictly follow the policy of No Return /
                                No Exchange Except in the following conditions;
                            </p>
                            <p>
                                {' '}
                                a) The Product delivered was not the product
                                ordered.------------ (Product will be exchanged)
                            </p>
                            <p>
                                {' '}
                                b) The Product delivered was not the same size
                                or in the same quantity, as ordered.
                                ----------(Product will be exchanged)
                            </p>
                            <p>
                                {' '}
                                c) The product delivered was not of the Brand
                                which was originally ordered------------(Product
                                will be exchanged)
                            </p>
                            <p>
                                However, in order to avail the above facility,
                                the difference in the product type or quantity
                                should immediately be informed on our registered
                                contact details failing which Dawoodonline.pk
                                will not be held liable.{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default termAndCondition;
