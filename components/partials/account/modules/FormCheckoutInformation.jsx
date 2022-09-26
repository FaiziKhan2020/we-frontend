import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Form, Input } from 'antd';
import { useCart } from 'react-use-cart';
import axios from 'axios';
import Select from 'react-select';
const FormCheckoutInformation = () => {
    const options = [
        { value: 'City (Rs.100)', label: 'City (Rs.100)' },
        { value: 'Hirabad (Rs.100)', label: 'Hirabad (Rs.100)' },
        { value: 'Latifabad (Rs.200)', label: 'Latifabad (Rs.200)' },
        { value: 'Qasimabad (Rs.200)', label: 'Qasimabad (Rs.200)' },
        { value: 'Jamshoro (Rs.200)', label: 'Jamshoro (Rs.200)' },
        { value: 'Kohsar (Rs.200)', label: 'Kohsar (Rs.200)' },
        { value: 'Isra (Rs.200)', label: 'Isra (Rs.200)' },
    ];
    const [result, ddlValue] = useState(options.value);
    const ddlHandler = (e) => {
        ddlValue(e.value);
    };
    const Router = useRouter();

    const { items, cartTotal, emptyCart } = useCart();
    console.log(items);

    const handleLoginSubmit = async (data) => {
        const body = {
            total: cartTotal,
            subTotal: cartTotal + result,
            contactInfo: data.contactInfo,
            shippingAddress: {
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                city: data.city,
                postalCode: data.postalCode,
                near: data.near,
                contactNo: data.contactNo,
                Email: data.Email,
                total: cartTotal,
                distance: result,
            },
            items: items,
        };

        try {
            const res = await axios.post(
                // 'https://dawoodbackend.herokuapp.com/api/v1/order/',
                // `http://localhost:8080/api/v1/order/`,
                // `https://dawoodddocker.herokuapp.com/api/v1/order/post/`,
                body
            );

            if (res.data.success) {
                Router.push({
                    pathname: '/account/payment',
                    query: { orderId: res.data.data.dataValues.orderId },
                });
                emptyCart();
            }
            console.log('CBM', { res });
            // console.log(items);
        } catch (error) {
            console.log('CBM', { error });
        }
    };

    return (
        <Form className="ps-form__billing-info" onFinish={handleLoginSubmit}>
            <h3 className="ps-form__heading">Shipping Address</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter your first name!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="First Name"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter your last name!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="Last Name"
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <Form.Item
                    name="contactNo"
                    rules={[
                        {
                            required: true,
                            message: 'Enter an email or mobile phone number!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="tel"
                        placeholder="Enter phone number"
                    />
                </Form.Item>
            </div>
            <div className="form-group">
                <Form.Item
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Enter an email or mobile phone number!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="email"
                        placeholder="Enter Email"
                    />
                </Form.Item>
            </div>
            <div className="form-group">
                <Form.Item
                    name="address"
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
            </div>
            <div className="form-group">
                <Form.Item
                    name="near"
                    rules={[
                        {
                            required: false,
                            message: 'Enter an Apartment!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                    />
                </Form.Item>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <Form.Item
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter a city!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="city"
                                placeholder="City"
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 py-4">
                    <div className="form-group">
                        <Form.Item
                            name="location"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter a location',
                                },
                            ]}>
                            <Select
                                options={options}
                                isClearable
                                placeholder="Choose a delivery location"
                                onChange={ddlHandler}
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>

            <div className="ps-form__submit">
                <Link href="/shopCartItems/shopCart">
                    <a>
                        <i className="icon-arrow-left mr-2"></i>
                        Return to shopping cart
                    </a>
                </Link>

                <div className="my-4 ps-block__footer text-center">
                    <button className="ps-btn">Place Order</button>
                </div>
            </div>
        </Form>
    );
};

export default FormCheckoutInformation;
