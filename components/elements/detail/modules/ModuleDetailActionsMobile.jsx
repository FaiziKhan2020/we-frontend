import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
import { motion } from 'framer-motion';
import style from '~/components/QAhomePage/style.module.css';
import { Form } from 'antd';
const ModuleDetailActionsMobile = ({ product }) => {
    // const { addItem } = useCart();
    const { addItem, items } = useCart();
    const [isAdding, setIsAdding] = useState(false);
    const total = () => {
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
    };
    const [Size, setSize] = useState('');
    const [Color, setColor] = useState('');

    function AddToCart() {
        addItem({
            id: product.id,
            price: product.price,
            title: product.title,
            imgUrl: product.imgUrl[0],
            sizes: Size,
            color: Color,
        });
        total();
    }

    console.log(items);
    return (
        <Form onFinish={AddToCart}>
            <div className={style.MainSelect}>
                <Form.Item
                    name="Color"
                    rules={[
                        {
                            required: true,
                            message: 'Choose Color',
                        },
                    ]}>
                    <select
                        className={`mr-4 ${style.selectpro}`}
                        onChange={(e) => setColor(e.target.value)}
                        required
                        value={Color}>
                        <option>Choose Color</option>
                        {product.color[0].map((item) => (
                            <>
                                <option> {item} </option>
                            </>
                        ))}
                    </select>
                </Form.Item>
                <Form.Item
                    name="Size"
                    rules={[
                        {
                            required: true,
                            message: 'Choose Size',
                        },
                    ]}>
                    <select
                        className={style.selectpro}
                        onChange={(e) => setSize(e.target.value)}
                        required
                        value={Size}>
                        <option> Choose Size</option>
                        {product.sizes[0].map((item) => (
                            <>
                                <option> {item} </option>
                            </>
                        ))}
                    </select>
                </Form.Item>
            </div>

            <div className={style.moduleBtn}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className={`mt-4 ${isAdding ? 'btn btn-primary' : 'btn'}`}>
                    ADD{isAdding ? 'ED' : ''}
                </motion.button>
            </div>
        </Form>
        // <div>
        //     <div className="my-4">
        //
        //
        //     </div>
        //     <div className={style.moduleBtn}>
        //         <motion.button
        //             whileHover={{ scale: 1.1 }}
        //             whileTap={{ scale: 0.9 }}
        //             type="button"
        //             className={`${isAdding ? 'btn btn-primary' : 'btn'}`}
        //             onClick={() => {
        //                 AddToCart();
        //                 total();
        //             }}>
        //             ADD{isAdding ? 'ED' : ''}
        //         </motion.button>
        //     </div>
        // </div>
    );
};
{
    /* <a
        className="ps-btn my-4"
        onClick={(e) => handleBuynow(e)}
        style={{ color: 'white' }}>
        Buy Now
    </a> */
}

export default connect((state) => state)(ModuleDetailActionsMobile);
