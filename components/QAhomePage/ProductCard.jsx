import React, { useState } from 'react';
import style from './style.module.css';
import { useCart } from 'react-use-cart';
import { motion } from 'framer-motion';
import Link from 'next/link';
const ProductCard = ({ imgUrl, title, price, item }) => {
    const { addItem } = useCart();
    const [isAdding, setIsAdding] = useState(false);
    const total = () => {
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
    };
    return (
        <div className={style.mainCard}>
            <div className={style.productcard}>
                <div className="py-4">
                    <Link href="/product/[pid]" as={`/product/${item?.id}`}>
                        <motion.img
                            whileHover={{ scale: 1.3 }}
                            referrerPolicy="no-referrer"
                            src={imgUrl}
                            alt="Product_image"
                            height={180}
                            width={200}
                        />
                    </Link>
                </div>
                <div className={`py-4 ${style.Productext}`}>
                    <div className="font-weight-bold">{title}</div>{' '}
                    <div>QR. {price} </div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className={`${isAdding ? 'btn btn-primary' : 'btn'}`}
                    onClick={() => {
                        addItem(item);
                        total();
                    }}>
                    ADD{isAdding ? 'ED' : ''}
                </motion.button>
            </div>
        </div>
    );
};

export default ProductCard;
