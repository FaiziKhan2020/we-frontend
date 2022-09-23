import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import Newsletters from '../partials/commons/Newletters';
const initHeaders = (
    <>
        <HeaderDefault />
        <HeaderMobile />
    </>
);
const initFooters = (
    <>
        <FooterFullwidth />
    </>
);
const initNewsletters = (
    <>
        <Newsletters />
    </>
);

const PageContainer = ({
    header = initHeaders,
    footer = initFooters,
    newsletters = initNewsletters,
    children,
    title = 'Page',
}) => {
    let titleView;

    if (title !== '') {
        titleView = process.env.title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            {header}
            {children}
            {newsletters}
            {footer}
            <a
                className="whatsapp"
                href="https://wa.me/+97450704018"
                target={'_blank'}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
                    alt="Whatsapp"
                    style={{
                        position: 'fixed',
                        bottom: '100px',
                        marginLeft: '20px',
                        width: '40px',
                        left: 0,
                        color: 'green',
                        cursor: 'pointer',
                    }}
                />
            </a>
        </>
    );
};

export default PageContainer;
