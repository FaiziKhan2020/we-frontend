import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
import { motion } from 'framer-motion';
import style from '~/components/QAhomePage/style.module.css';
import { Form } from 'antd';
import Link from "next/link"
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
            imgUrl: product.imgUrl,
            size:product.size,
            color: product.color,
        });
        total();
    }

    console.log(items);
    return (
        <Form onFinish={AddToCart}>
            <div className={style.MainSelect}></div>
            <div className="d-flex  ">
                <div className={style.moduleBtn}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        className={`mt-4 ${
                            isAdding ? 'btn btn-primary' : 'btn'
                        }`}>
                        ADD{isAdding ? 'ED' : ''}
                    </motion.button>
                </div>

                <Link href="/account/checkout">
                    <div className={`ml-4 ${style.moduleBtn}`}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                            className="mt-4">
                            Checkout
                        </motion.button>
                    </div>
                </Link>
            </div>

            {/* <div className={style.moduleBtn}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className={`mt-4 ${isAdding ? 'btn btn-primary' : 'btn'}`}>
                    ADD{isAdding ? 'ED' : ''}
                </motion.button>
            </div> */}
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
