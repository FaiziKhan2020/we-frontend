import React from 'react';
import { useCart } from 'react-use-cart';
import { motion } from 'framer-motion';
import style from './style.module.css';
const CustomCart = () => {
    const { isEmpty, items, updateItemQuantity, removeItem, emptyCart } =
        useCart();
    console.log(items);
    if (isEmpty) return <h3 className="text-center">Your Cart Is Empty</h3>;
    return (
        <div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th className={style.formHeading}>#</th>
                            <th className={style.formHeading}>Product</th>
                            <th className={style.formHeading}>Title</th>
                            <th className={style.formHeading}>Color</th>
                            <th className={style.formHeading}>Size</th>
                            <th className={style.formHeading}>Quantity</th>
                            <th className={style.formHeading}>Price</th>
                            <th className={style.formHeading}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row"> {index + 1} </th>
                                <td className={style.productImg}>
                                    <motion.img
                                        whileHover={{ scale: 1.2 }}
                                        referrerPolicy="no-referrer"
                                        // height={150}
                                        src={item.imgUrl[0] || item.url}
                                        alt="product img"
                                        style={{
                                            width: '150px',
                                            height: 'auto',
                                            borderRadius: '5px',
                                        }}
                                    />{' '}
                                </td>{' '}
                                {/* <td>{item.title}</td> */}{' '}
                                <td>{item.title}</td>
                                <td>{item.color}</td>
                                <td>{item.sizes}</td>
                                <td>
                                    <div className={style.formCart}>
                                        <button
                                            className="down"
                                            onClick={(e) =>
                                                updateItemQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }>
                                            -
                                        </button>
                                        <input
                                            className={style.formInput}
                                            type="text"
                                            placeholder={item.quantity}
                                            disabled={true}
                                        />

                                        <button
                                            className="up"
                                            onClick={(e) =>
                                                updateItemQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }>
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </strong>
                                </td>
                                <td>
                                    <a onClick={(e) => removeItem(item.id)}>
                                        <i className="icon-cross"></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomCart;
