import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import BlankContent from '~/components/partials/page/Blank';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemHeading,
} from 'react-accessible-accordion';
import items from './accordian.json';
const FaqsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: "faq's",
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Blank page">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-section--custom">
                    <div className="container">
                        <Accordion allowZeroExpanded>
                            {items.map((item) => (
                                <AccordionItem key={item.uuid}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {item.heading}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        {item.content}
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        {/* <div className="ps-section__header">
                            <h3>Faq's</h3>
                        </div>
                        <div className="ps-section__content">
                            <h4>
                                {' '}
                                How Do I get registered on dawoodonline.pk
                                website?
                            </h4>
                            <p>
                                A- We have kept the registration process very
                                simple. Just go to the website and click
                                (Register) Fill in your Name, complete Address
                                and other particulars and click (Submit). You
                                will receive a Thank You e-mail on your e-mail
                                ID. Your registration was successful.
                            </p>
                            <h4>Q- How do I place my order?</h4>

                            <p>
                                {' '}
                                A- Just Log into your account, browse through
                                our listed product categories, Select the items
                                you like and place them directly in the cart by
                                clicking the (Cart) option or create a Wish List
                                by clicking the (Heart) icon at the bottom of
                                every product. Go to your cart (If you have
                                completed your shopping list) and click
                                (Checkout). (You have successfully placed your
                                order)
                            </p>
                            <h4> Q- What is a Wish list?</h4>
                            <p>
                                A- Wish list is a standby list of items that you
                                might use on a regular monthly basis. Just place
                                your items in the wish list by clicking the
                                (heart) icon at the bottom of each product of
                                interest. This item will become part of the wish
                                list and will be available to you for any
                                subsequent or future Order. You can Add, Delete,
                                Increase or Decrease quantity in your Wish list
                                at any time.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default FaqsPage;
