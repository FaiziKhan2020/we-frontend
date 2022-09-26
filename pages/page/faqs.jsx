import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemHeading,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import items from './accordians.json';
import { CartProvider } from 'react-use-cart';
import style from '~/components/QAhomePage/style.module.css';
const FaqsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: "Faq's",
        },
    ];

    return (
        <CartProvider>
            <PageContainer footer={<FooterDefault />} title="Blank page">
                <div className="ps-page--single">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-section--custom">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div
                                        style={{
                                            width: '70%',
                                            margin: 'auto',
                                        }}>
                                        <Accordion allowZeroExpanded>
                                            {items.map((item) => (
                                                <AccordionItem key={item.uuid}>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton
                                                            style={{
                                                                fontSize:
                                                                    '18px',
                                                                fontWeight:
                                                                    '500',
                                                            }}>
                                                            {item.heading}
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel
                                                        style={{
                                                            fontSize: '15px',
                                                        }}>
                                                        {item.content}
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </CartProvider>
    );
};

export default FaqsPage;
