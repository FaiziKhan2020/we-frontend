import React from 'react';
import { Form, Input } from 'antd';
import axios from 'axios';

const Newsletters = (layout) => {
    const handleLoginSubmit = async (data) => {
        const body = {
            Email: data.Email,
        };

        try {
            const res = await axios.post(
                // 'https://dawoodbackend.herokuapp.com/api/v1/order/',
                // 'http://localhost:8080/api/v1/Email/',
                `http://dawoodddocker.herokuapp.com/api/v1/Email/`,
                body
            );
            console.log('CBM', { res });
        } catch (error) {
            console.log('CBM', { error });
            console.log('hello world');
        }
    };
    return (
        <section className="ps-newsletter">
            <Form
                className={
                    layout && layout === 'container'
                        ? ' container'
                        : 'ps-container'
                }
                onFinish={handleLoginSubmit}>
                <div className="row">
                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-form__left">
                            {' '}
                            <h3>Newsletter</h3>
                            <p>
                                Subscribe to get information about products and
                                coupons
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-form__right">
                            <div className="asd">
                                <Form.Item
                                    name="Email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter an address!',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="text"
                                        placeholder="Address"
                                    />
                                </Form.Item>
                                <button
                                    className="ps-btn py-4"
                                    onClick={() =>
                                        alert('Thanks for subscribing')
                                    }>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-form__left">
                        <h3>Newsletter</h3>
                        <p>
                            Subcribe to get information about products and
                            coupons
                        </p>
                    </div>
                    <div className="ps-form__right">
                        <div className="form-group--nest">
                            <div className="form-group">
                                <Form.Item
                                    name="Email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter an address!',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="text"
                                        placeholder="Address"
                                    />
                                </Form.Item>
                                <button
                                    className="ps-btn"
                                    onClick={() =>
                                        alert('Thanks for subscribing')
                                    }>
                                    {' '}
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Form>
        </section>
    );
};
export default Newsletters;

// import React from 'react';

// const Newsletters = ({ layout }) => (
//     <section className="ps-newsletter">
//         <div className={layout && layout === 'container' ? ' container' : 'ps-container'}>
//             <form className="ps-form--newsletter" action="do_action" method="post">
//                 <div className="row">
//                     <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
//                         <div className="ps-form__left">
//                             <h3>Newsletter</h3>
//                             <p>Subcribe to get information about products and coupons</p>
//                         </div>
//                     </div>
//                     <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
//                         <div className="ps-form__right">
//                             <div className="form-group--nest">
//                                 <input
//                                     className="form-control"
//                                     type="email"
//                                     placeholder="Email address"
//                                 />
//                                 <button className="ps-btn">Subscribe</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     </section>
// );

// export default Newsletters;
