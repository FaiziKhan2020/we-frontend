import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { motion } from 'framer-motion';

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
    console.log(product.color);

    const customStyles = {
        option: (base, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...base,
                backgroundColor: isFocused ? product.color[0].[1].color : 'pink',
            };
        },
    };

    // function handleBuynow(e) {
    //     e.preventDefault();
    //     addItem({
    //         id: product.id,
    //         price: product.price,
    //         title: product.title,
    //         imgUrl: product.imgUrl,
    //         sizes: Gender,
    //     });
    //     setTimeout(function () {
    //         Router.push('/shopCartItems/shopCart');
    //     }, 1000);
    // }

    return (
        <div>
            <div className="my-4">
                <div className="my-4">
                    <Select
                        isClearable
                        isSearchable={false}
                        required
                        options={product.color[0]}
                        placeholder="Please Select Size"
                        onChange={(e) => setColor(e.value)}
                        styles={product.color[0]}
                    />
                </div>
                <Select
                    isClearable
                    isSearchable={false}
                    required
                    options={product.sizes[0]}
                    placeholder="Please Select Size"
                    onChange={(e) => setSize(e.value)}
                />
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
