import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FooterWidgets = () => (
    <div className="container ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">CONTACT US</h4>
            <div className="widget_content">
                <p>Free support line</p>
                <Link href="tel:+97450704018">
                    <h3 style={{ cursor: 'pointer' }}>+090078601</h3>
                </Link>
                <p>
                    <a href="mailto:Kusman2560@gmail.com">
                        Kusman2560@gmail.com
                    </a>
                </p>
                <ul className="ps-list--social">
                    <motion.li whileHover={{ scale: 1.2 }}>
                        <a className="facebook" href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }}>
                        <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }}>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }}>
                        <a className="instagram" href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </motion.li>
                </ul>
            </div>
            <br />
            <p>Design By Muhammad Usman</p>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">CUSTOMER SERVICE</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about">
                        <a>About Us</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/contact-us">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">INFORMATION</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/shipping-policy">
                        <a>Shipping Policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/return-policy">
                        <a>Return Policy</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/page/term-and-condition">
                        <a>Terms & Condition</a>
                    </Link>
                </li> */}
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">EXTRAS</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/faqs">
                        <a>FAQs</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
