import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';

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
        <PageContainer footer={<FooterDefault />} title="Return policy">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-section--custom">
                    <div className="container">
                        <div className="ps-section__header">
                            <h3>Return Policy</h3>
                        </div>
                        <div className="ps-section__content">
                            <p>
                                Our authorized person will pick up your order,
                                from the nearest outlet and effect delivery in
                                the shortest possible time to you. Hence, the
                                terms and conditions for any return item will
                                solely be governed by the retail outlet from
                                where the shipment is picked up. QA-FASHION
                                takes responsibility regarding the quality and
                                freshness of any item on our part.
                            </p>
                            <p>
                                Whilst we make every effort to deliver all your
                                goods in the agreed time, we will not be liable
                                if we fail to do so in part or in full due to
                                circumstances beyond our control. We currently
                                only deliver in Qatar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default returnPolicy;
