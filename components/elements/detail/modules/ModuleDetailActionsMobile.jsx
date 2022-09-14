import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { motion } from 'framer-motion';
import { Form, Input } from 'antd';

import style from '~/components/QAhomePage/style.module.css';
const ModuleDetailActionsMobile = ({ product }) => {
    const { addItem } = useCart();
    const [isAdding, setIsAdding] = useState(false);
    const total = () => {
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
    };
    const [Gender, setGender] = useState('');
    const Router = useRouter();
    function AddToCart() {
        addItem({
            id: product.id,
            price: product.price,
            title: product.title,
            imgUrl: product.imgUrl,
            sizes: Gender,
        });
    }
    function handleBuynow(e) {
        e.preventDefault();
        addItem({
            id: product.id,
            price: product.price,
            title: product.title,
            imgUrl: product.imgUrl,
            sizes: Gender,
        });
        setTimeout(function () {
            Router.push('/shopCartItems/shopCart');
        }, 1000);
    }

    return (
        <Form>
            <div>
                <div className="my-4">
                    {console.log(Gender)}
                    <Form.Item
                        name="Size"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter a Size',
                            },
                        ]}>
                        <Select
                            isClearable
                            isSearchable={false}
                            required
                            options={product.sizes[0]}
                            placeholder="Size"
                            onChange={(e) => setGender(e.value)}
                        />
                    </Form.Item>
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
                <a
                    className="ps-btn my-4"
                    onClick={(e) => handleBuynow(e)}
                    style={{ color: 'white' }}>
                    Buy Now
                </a>
            </div>
        </Form>
    );
};

export default connect((state) => state)(ModuleDetailActionsMobile);
