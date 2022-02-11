import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';
import { useCart } from 'react-use-cart';
import axios from 'axios';

const FormCheckoutInformation = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const handleLoginSubmit = async (data) => {
        const body = {
            total: cartTotal,
            subTotal: cartTotal,
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
            },
            items: items.map((item) => parseInt(item.id)),
        };

        try {
            const res = await axios.post(
                'https://dawoodbackend.herokuapp.com/api/v1/order/',
                // 'http://localhost:8080/api/v1/order/',
                body
            );
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
                    name="contactInfo"
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
                                    required: false,
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
                    <button
                        className="ps-btn"
                        onClick={() =>
                            alert(
                                'please review your from then press place order button'
                            )
                        }>
                        Confirm
                    </button>
                </div>
                <div className="ps-block__footer">
                    <Link href="/account/payment">
                        <a>
                            <button className="ps-btn">Place Order</button>
                        </a>
                    </Link>
                </div>
            </div>
        </Form>
    );
};

export default FormCheckoutInformation;
// // import React, { Component } from 'react';
// // import Link from 'next/link';
// // import Router from 'next/router';
// // import { Form, Input } from 'antd';
// // import { useCart } from 'react-use-cart';
// // import axios from 'axios';

// // const FormCheckoutInformation = () => {
// //     const {
// //         isEmpty,
// //         totalUniqueItems,
// //         items,
// //         totalItems,
// //         cartTotal,
// //         updateItemQuantity,
// //         removeItem,
// //         emptyCart,
// //     } = useCart();

// //     const handleLoginSubmit = async (data) => {
// //         const body = {
// //             total: cartTotal,
// //             subTotal: cartTotal,
// //             contactInfo: data.contactInfo,
// //             shippingAddress: {
// //                 firstName: data.firstName,
// //                 lastName: data.lastName,
// //                 address: data.address,
// //                 city: data.city,
// //                 postalCode: data.postalCode,
// //                 near: data.near,
// //             },
// //             items: items.map((item) => parseInt(item.id)),
// //         };

// //         try {
// //             const res = await axios.post(
// //                 'http://localhost:8080/api/v1/order',
// //                 body
// //             );
// //             console.log('CBM', { res });
// //         } catch (error) {
// //             console.log('CBM', { error });
// //         }
// //     };

// //     return (
// //         <Form className="ps-form__billing-info" onFinish={handleLoginSubmit}>
// //             <h3 className="ps-form__heading">Contact information</h3>
// //             <div className="form-group">
// //                 <Form.Item
// //                     name="contactInfo"
// //                     rules={[
// //                         {
// //                             required: false,
// //                             message: 'Enter an email or mobile phone number!',
// //                         },
// //                     ]}>
// //                     <Input
// //                         className="form-control"
// //                         type="text"
// //                         placeholder="Email or phone number"
// //                     />
// //                 </Form.Item>
// //             </div>
// //             <div className="form-group">
// //                 <div className="ps-checkbox">
// //                     <input
// //                         className="form-control"
// //                         type="checkbox"
// //                         id="keep-update"
// //                     />
// //                     <label htmlFor="keep-update">
// //                         Keep me up to date on news and exclusive offers?
// //                     </label>
// //                 </div>
// //             </div>
// //             <h3 className="ps-form__heading">Shipping address</h3>
// //             <div className="row">
// //                 <div className="col-sm-6">
// //                     <div className="form-group">
// //                         <Form.Item
// //                             name="firstName"
// //                             rules={[
// //                                 {
// //                                     required: false,
// //                                     message: 'Enter your first name!',
// //                                 },
// //                             ]}>
// //                             <Input
// //                                 className="form-control"
// //                                 type="text"
// //                                 placeholder="First Name"
// //                             />
// //                         </Form.Item>
// //                     </div>
// //                 </div>
// //                 <div className="col-sm-6">
// //                     <div className="form-group">
// //                         <Form.Item
// //                             name="lastName"
// //                             rules={[
// //                                 {
// //                                     required: false,
// //                                     message: 'Enter your last name!',
// //                                 },
// //                             ]}>
// //                             <Input
// //                                 className="form-control"
// //                                 type="text"
// //                                 placeholder="Last Name"
// //                             />
// //                         </Form.Item>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="form-group">
// //                 <Form.Item
// //                     name="address"
// //                     rules={[
// //                         {
// //                             required: false,
// //                             message: 'Enter an address!',
// //                         },
// //                     ]}>
// //                     <Input
// //                         className="form-control"
// //                         type="text"
// //                         placeholder="Address"
// //                     />
// //                 </Form.Item>
// //             </div>
// //             <div className="form-group">
// //                 <Form.Item
// //                     name="near"
// //                     rules={[
// //                         {
// //                             required: false,
// //                             message: 'Enter an Apartment!',
// //                         },
// //                     ]}>
// //                     <Input
// //                         className="form-control"
// //                         type="text"
// //                         placeholder="Apartment, suite, etc. (optional)"
// //                     />
// //                 </Form.Item>
// //             </div>
// //             <div className="row">
// //                 <div className="col-sm-6">
// //                     <div className="form-group">
// //                         <Form.Item
// //                             name="city"
// //                             rules={[
// //                                 {
// //                                     required: false,
// //                                     message: 'Enter a city!',
// //                                 },
// //                             ]}>
// //                             <Input
// //                                 className="form-control"
// //                                 type="city"
// //                                 placeholder="City"
// //                             />
// //                         </Form.Item>
// //                     </div>
// //                 </div>
// //                 <div className="col-sm-6">
// //                     <div className="form-group">
// //                         <Form.Item
// //                             name="postalCode"
// //                             rules={[
// //                                 {
// //                                     required: false,
// //                                     message: 'Enter a postal oce!',
// //                                 },
// //                             ]}>
// //                             <Input
// //                                 className="form-control"
// //                                 type="postalCode"
// //                                 placeholder="Postal Code"
// //                             />
// //                         </Form.Item>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="form-group">
// //                 <div className="ps-checkbox">
// //                     <input
// //                         className="form-control"
// //                         type="checkbox"
// //                         id="save-information"
// //                     />
// //                     <label htmlFor="save-information">
// //                         Save this information for next time
// //                     </label>
// //                 </div>
// //             </div>
// //             <div className="ps-form__submit">
// //                 <Link href="/account/cart">
// //                     <a>
// //                         <i className="icon-arrow-left mr-2"></i>
// //                         Return to shopping cart
// //                     </a>
// //                 </Link>
// //                 <div className="ps-block__footer">
// //                     <button className="ps-btn">Place Order</button>
// //                 </div>
// //             </div>
// //         </Form>
// //     );
// // };

// // export default FormCheckoutInformation;

// import React, { Component } from 'react';
// import Link from 'next/link';
// import Router from 'next/router';
// import { Form, Input } from 'antd';
// import { useCart } from 'react-use-cart';
// import axios from 'axios';

// const FormCheckoutInformation = () => {
//     const {
//         isEmpty,
//         totalUniqueItems,
//         items,
//         totalItems,
//         cartTotal,
//         updateItemQuantity,
//         removeItem,
//         emptyCart,
//     } = useCart();

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
//             },
//             items: items.map((item) => parseInt(item.id)),
//         };

//         try {
//             const res = await axios.post(
//                 // 'https://dawoodbackend.herokuapp.com/api/v1/order/',
//                 'http://localhost:8080/api/v1/order/',
//                 body
//             );
//             console.log('CBM', { res });
//         } catch (error) {
//             console.log('CBM', { error });
//         }
//     };

//     return (
//         <Form className="ps-form__billing-info" onFinish={handleLoginSubmit}>
//             <h3 className="ps-form__heading">Contact information</h3>
//             <div className="form-group">
//                 <Form.Item
//                     name="contactInfo"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Enter an email or mobile phone number!',
//                         },
//                     ]}>
//                     <Input
//                         className="form-control"
//                         type="text"
//                         placeholder="Email or phone number"
//                     />
//                 </Form.Item>
//             </div>
//             <div className="form-group">
//                 <div className="ps-checkbox">
//                     <input
//                         className="form-control"
//                         type="checkbox"
//                         id="keep-update"
//                     />
//                     <label htmlFor="keep-update">
//                         Keep me up to date on news and exclusive offers?
//                     </label>
//                 </div>
//             </div>
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
//                             required: true,
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
//             <div className="form-group">
//                 <div className="ps-checkbox">
//                     <input
//                         className="form-control"
//                         type="checkbox"
//                         id="save-information"
//                     />
//                     <label htmlFor="save-information">
//                         Save this information for next time
//                     </label>
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
//                     <button className="ps-btn">Place Order</button>
//                 </div>
//             </div>
//         </Form>
//     );
// };

// export default FormCheckoutInformation;
