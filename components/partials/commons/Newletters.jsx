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
                // `https://dawoodddocker.herokuapp.com/api/v1/Email`,
                body
            );
            console.log('CBM', { res });
        } catch (error) {
            console.log('CBM', { error });
            console.log('hello world');
        }
    };
    return (
        <section className="container ps-newsletter">
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
                                            message: 'Enter an email address!',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                </Form.Item>
                                <button
                                    className="ps-btn py-4"
                                    // onClick={() =>
                                    //     alert('Thanks for subscribing')
                                    // }
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </section>
    );
};
export default Newsletters;
