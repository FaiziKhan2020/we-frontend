import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import style from './contactUs.module.css';
import { motion } from 'framer-motion';
import { CartProvider } from 'react-use-cart';
const ContactUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Contact Us',
        },
    ];

    return (
        <CartProvider>
            <PageContainer footer={<FooterDefault />} title="Contact Us">
                <div className="ps-page--single" id="contact-us">
                    <BreadCrumb breacrumb={breadCrumb} />
                    {/* <div className={style.wahab}>asd</div> */}
                    <div className="container my-4">
                        <div className="row">
                            <div className="col-md-4 mt-4">
                                <div className={`p-4 ${style.left}`}>
                                    <div className={style.leftImg}>
                                        <motion.img
                                            whileHover={{ scale: 1.2 }}
                                            src="https://res.cloudinary.com/xcltech/image/upload/v1662455480/100/undraw_developer_activity_re_39tg_kc8xsi.svg"
                                            alt="cotnactUs"
                                        />
                                    </div>
                                    <div
                                        className={`py-2 ${style.leftContact}`}>
                                        <h5>Address</h5>
                                        <p>Qatar</p>
                                    </div>
                                    <div
                                        className={`py-2 ${style.leftContact}`}>
                                        <h5>Phone</h5>
                                        <p>00974-50704018</p>
                                    </div>
                                    <div
                                        className={`py-2 ${style.leftContact}`}>
                                        <h5>Email</h5>
                                        <p>khtgulf@gmail.com</p>
                                    </div>
                                    <div
                                        className={`py-2 ${style.leftContact}`}>
                                        <h5>Follow Us</h5>
                                        <ul className="ps-list--social">
                                            <motion.li
                                                whileHover={{ scale: 1.2 }}>
                                                <a
                                                    className="facebook"
                                                    href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </motion.li>
                                            <motion.li
                                                whileHover={{ scale: 1.2 }}>
                                                <a className="twitter" href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </motion.li>
                                            <motion.li
                                                whileHover={{ scale: 1.2 }}>
                                                <a
                                                    className="google-plus"
                                                    href="#">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </motion.li>
                                            <motion.li
                                                whileHover={{ scale: 1.2 }}>
                                                <a
                                                    className="instagram"
                                                    href="#">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </motion.li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className={`p-4 ${style.right}`}>
                                    <div className={style.rightContact}>
                                        Questions, Comments, Or Concerns?
                                    </div>
                                    <div className={style.rightFrom}>
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail4">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="inputEmail4"
                                                        placeholder="Full Name"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputPassword4">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        id="inputPassword4"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputAddress">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="inputAddress"
                                                    placeholder="Problem"
                                                />
                                            </div>{' '}
                                            <div class="form-group">
                                                <label for="inputAddress">
                                                    Message
                                                </label>
                                                <textarea
                                                    type="text"
                                                    class="form-control"
                                                    id="inputAddress"
                                                    placeholder="Any Query"></textarea>
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                type="submit"
                                                class="btn btn-primary">
                                                Submit
                                            </motion.button>
                                        </form>
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

export default ContactUsPage;
