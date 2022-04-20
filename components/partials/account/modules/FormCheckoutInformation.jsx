import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Form, Input } from 'antd';
import { useCart } from 'react-use-cart';
import axios from 'axios';
import Select from 'react-select';

const FormCheckoutInformation = () => {
    const options = [
        { value: 100, label: 'Latifabad' },
        { value: 'City', label: 'City' },
        { value: 'Qasimabad', label: 'Qasimabad' },
        { value: 'Hirabad', label: 'Hirabad' },
        { value: 'Jamshoro', label: 'Jamshoro' },
        { value: 'Kohsar', label: 'Kohsar' },
    ];
    const [result, ddlValue] = useState(options.value);
    const ddlHandler = (e) => {
        ddlValue(e.value);
    };
    const Router = useRouter();
    // const hyderabad=100
    // const karachi=150
    // const lahore=40
    // const dadu=1000

    const { items, cartTotal, emptyCart } = useCart();

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

        // console.log(items);
        console.log('hello world');
        console.log(result);
        try {
            const res = await axios.post(
                // 'https://dawoodbackend.herokuapp.com/api/v1/order/',
                // `http://localhost:8080/api/v1/order/`,
                `https://dawoodddocker.herokuapp.com/api/v1/order/post/`,
                body
            );
            console.log(res);
            if (res.data.success) {
                // Router.push('/account/payment');
                Router.push({
                    pathname: '/account/payment',
                    query: { orderId: res.data.data.dataValues.id },
                });
                emptyCart();
            }
            console.log('CBM', { res });
        } catch (error) {
            console.log('CBM', { error });
        }
    };

    return (
        <Form className="ps-form__billing-info" onFinish={handleLoginSubmit}>
            {/* <h3 className="ps-form__heading">Contact information</h3> */}

            <h3 className="ps-form__heading">Shipping address</h3>
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
                        type="text"
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
                        type="text"
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
                <div className="col-sm-6">
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
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="postalCode"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter a postal code!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="postalCode"
                                placeholder="Postal Code"
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

            <div className="form-group">
                <div className="ps-checkbox">
                    <h5>Press confirm button before placing the order </h5>
                </div>
            </div>
            <div className="ps-form__submit">
                <Link href="/account/cart">
                    <a>
                        <i className="icon-arrow-left mr-2"></i>
                        Return to shopping cart
                    </a>
                </Link>

                <div className="ps-block__footer">
                    {/* <Link href="/account/payment"> */}
                    {/* <a> */}
                    <button
                        className="ps-btn"
                        onClick={() =>
                            alert(
                                'please review your from then press place order button'
                            )
                        }>
                        Place Order
                    </button>
                    {/* </a> */}
                    {/* </Link> */}
                </div>
            </div>
        </Form>
    );
};

export default FormCheckoutInformation;

// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Form, Input } from 'antd';
// import { useCart } from 'react-use-cart';
// import axios from 'axios';
// import Select from 'react-select';

// const options = [
//     { value: 'Latifabad', label: 'Latifabad' },
//     { value: 'City', label: 'City' },
//     { value: 'Qasimabad', label: 'Qasimabad' },
//     { value: 'Hirabad', label: 'Hirabad' },
//     { value: 'Jamshoro', label: 'Jamshoro' },
//     { value: 'Kohsar', label: 'Kohsar' },
// ];
// const FormCheckoutInformation = () => {
//     const Router = useRouter();

//     const { items, cartTotal } = useCart();

//     const handleLoginSubmit = async (data) => {
//         const body = {
//             total: cartTotal,
//             subTotal: cartTotal,
//             contactInfo: data.contactInfo,
//             shippingAddress: {
//                 firstName: data.firstName,
//                 lastName: data.lastName,
//                 address: data.address,
//                 city: data.city,
//                 postalCode: data.postalCode,
//                 near: data.near,
//                 contactNo: data.contactNo,
//                 Email: data.Email,
//                 total: cartTotal,
//             },
//             items: items,
//         };
//         console.log(items);
//         try {
//             const res = await axios.post(
//                 // 'https://dawoodbackend.herokuapp.com/api/v1/order/',
//                 'http://localhost:8080/api/v1/order/',
//                 body
//             );
//             if (res.data.success) {
//                 Router.push('/account/payment');
//             }
//             console.log('CBM', { res });
//         } catch (error) {
//             console.log('CBM', { error });
//         }
//     };

//     // const handleLoginSubmit = async (data) => {
//     //     try {
//     //         Router.push('/account/payment');
//     //     } catch (err) {
//     //         console.log(err);
//     //     }
//     // };

//     return (
//         <Form className="ps-form__billing-info" onFinish={handleLoginSubmit}>
//             {/* <h3 className="ps-form__heading">Contact information</h3> */}

//             <h3 className="ps-form__heading">Shipping address</h3>
//             <div className="row">
//                 <div className="col-sm-6">
//                     <div className="form-group">
//                         <Form.Item
//                             name="firstName"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Enter your first name!',
//                                 },
//                             ]}>
//                             <Input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder="First Name"
//                             />
//                         </Form.Item>
//                     </div>
//                 </div>
//                 <div className="col-sm-6">
//                     <div className="form-group">
//                         <Form.Item
//                             name="lastName"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Enter your last name!',
//                                 },
//                             ]}>
//                             <Input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder="Last Name"
//                             />
//                         </Form.Item>
//                     </div>
//                 </div>
//             </div>
//             <div className="form-group">
//                 <Form.Item
//                     name="contactNo"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Enter an email or mobile phone number!',
//                         },
//                     ]}>
//                     <Input
//                         className="form-control"
//                         type="text"
//                         placeholder="Enter phone number"
//                     />
//                 </Form.Item>
//             </div>
//             <div className="form-group">
//                 <Form.Item
//                     name="Email"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Enter an email or mobile phone number!',
//                         },
//                     ]}>
//                     <Input
//                         className="form-control"
//                         type="text"
//                         placeholder="Enter Email"
//                     />
//                 </Form.Item>
//             </div>
//             <div className="form-group">
//                 <Form.Item
//                     name="address"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Enter an address!',
//                         },
//                     ]}>
//                     <Input
//                         className="form-control"
//                         type="text"
//                         placeholder="Address"
//                     />
//                 </Form.Item>
//             </div>
//             <div className="form-group">
//                 <Form.Item
//                     name="near"
//                     rules={[
//                         {
//                             required: false,
//                             message: 'Enter an Apartment!',
//                         },
//                     ]}>
//                     <Input
//                         className="form-control"
//                         type="text"
//                         placeholder="Apartment, suite, etc. (optional)"
//                     />
//                 </Form.Item>
//             </div>
//             <div className="row">
//                 <div className="col-sm-6">
//                     <div className="form-group">
//                         <Form.Item
//                             name="city"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Enter a city!',
//                                 },
//                             ]}>
//                             <Input
//                                 className="form-control"
//                                 type="city"
//                                 placeholder="City"
//                             />
//                         </Form.Item>
//                     </div>
//                 </div>
//                 <div className="col-sm-6">
//                     <div className="form-group">
//                         <Form.Item
//                             name="postalCode"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Enter a postal code!',
//                                 },
//                             ]}>
//                             <Input
//                                 className="form-control"
//                                 type="postalCode"
//                                 placeholder="Postal Code"
//                             />
//                         </Form.Item>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-12 py-4">
//                     <div className="form-group">
//                         <Form.Item
//                             name="location"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Please enter a location',
//                                 },
//                             ]}>
//                             <Select
//                                 options={options}
//                                 isClearable
//                                 placeholder="Choose a delivery location"
//                             />
//                         </Form.Item>
//                     </div>
//                 </div>
//             </div>

//             <div className="form-group">
//                 <div className="ps-checkbox">
//                     <h5>Press confirm button before placing the order </h5>
//                 </div>
//             </div>
//             <div className="ps-form__submit">
//                 <Link href="/account/cart">
//                     <a>
//                         <i className="icon-arrow-left mr-2"></i>
//                         Return to shopping cart
//                     </a>
//                 </Link>

//                 <div className="ps-block__footer">
//                     <button
//                         className="ps-btn"
//                         onClick={() =>
//                             alert(
//                                 'please review your from then press place order button'
//                             )
//                         }>
//                         Place Order
//                     </button>
//                 </div>
//             </div>
//         </Form>
//     );
// };

// export default FormCheckoutInformation;
