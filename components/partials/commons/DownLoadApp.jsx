import React from 'react';
import { Form, Input } from 'antd';
import axios from 'axios';

const DownloadApp = () => {
    const handleLoginSubmit = async (data) => {
        const body = {
            Email: data.Email,
        };

        try {
            const res = await axios.post(
                // 'https://dawoodbackend.herokuapp.com/api/v1/order/',
                'http://localhost:8080/api/v1/Email/',
                body
            );
            console.log('CBM', { res });
        } catch (error) {
            console.log('CBM', { error });
            console.log('hello world');
        }
    };

    return (
        <form className="ps-form__billing-info" onFinish={handleLoginSubmit}>
            <section className="ps-download-app">
                <div className="ps-container">
                    <div className="ps-block--download-app">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                    <div className="ps-block__thumbnail">
                                        <img
                                            src="/static/img/app.png"
                                            alt="qa-fashion"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                    <div className="ps-block__content">
                                        <h3>Download qa-fashion App Now!</h3>
                                        <p>
                                            Shopping fastly and easily more with
                                            our app. Get a link to download the
                                            app on your phone
                                        </p>
                                        <p className="download-link px-4">
                                            <a href="#" className="px-3">
                                                <img
                                                    src="/static/img/google-play.png"
                                                    alt="qa-fashion"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="/static/img/app-store.png"
                                                    alt="qa-fashion"
                                                />
                                            </a>
                                        </p>
                                        {/* <div> */}
                                        {/* <Form.Item
                                                name="Email"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Enter an email or mobile phone number!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Email your Email"
                                                />
                                            </Form.Item> */}
                                        {/* <button
                                                style={{
                                                    backgroundColor: '#de0000',
                                                    border: 'none',
                                                    padding: '10px 30px',
                                                }}>
                                                done
                                            </button> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default DownloadApp;
