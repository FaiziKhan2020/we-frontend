import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
// import { useRouter } from 'next/router';
// import Select from 'react-select';
import { motion } from 'framer-motion';
import style from '~/components/QAhomePage/style.module.css';
const ModuleDetailActionsMobile = ({ product }) => {
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
    // const Router = useRouter();
    function AddToCart() {
        addItem({
            id: product.id,
            price: product.price,
            title: product.title,
            imgUrl: product.imgUrl,
            sizes: Size,
            color: Color,
        });
        total();
    }
    console.log(items);

    return (
        <div>
            <div className="my-4">
                <select
                    className={`mr-4 mb-4 ${style.selectpro}`}
                    onChange={(e) => setColor(e.target.value)}
                    value={Color}>
                    <option>Choose Color</option>
                    {product.color[0].map((item) => (
                        <>
                            <option> {item} </option>
                        </>
                    ))}
                </select>
                <select
                    className={style.selectpro}
                    onChange={(e) => setSize(e.target.value)}
                    value={Size}>
                    <option> Choose Size</option>
                    {product.sizes[0].map((item) => (
                        <>
                            <option> {item} </option>
                        </>
                    ))}
                </select>
            </div>
            <div className={style.moduleBtn}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className={`${isAdding ? 'btn btn-primary' : 'btn'}`}
                    onClick={() => {
                        AddToCart();
                        total();
                    }}>
                    ADD{isAdding ? 'ED' : ''}
                </motion.button>
            </div>
            {/* <a
                    className="ps-btn my-4"
                    onClick={(e) => handleBuynow(e)}
                    style={{ color: 'white' }}>
                    Buy Now
                </a> */}
        </div>
    );
};

export default connect((state) => state)(ModuleDetailActionsMobile);
