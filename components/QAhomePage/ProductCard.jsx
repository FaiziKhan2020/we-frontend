import React, { useState } from 'react';
import style from './style.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductCard = ({ imgUrl, title, price, item, loading }) => {
    if (loading) {
        return <h4>Loading ...</h4>;
    }
    const Router = useRouter();
    const [isAdding, setIsAdding] = useState(false);
    const total = () => {
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
            Router.push(`/product/${item.id}`);
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
                    <div className="font-weight-bold text-center">{title}</div>
                    <div className="text-center">QR. {price} </div>
                </div>
                {/* <Link href="/product/[pid]" as={`/product/${item?.id}`}> */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => {
                        total();
                    }}
                    className={`${isAdding ? 'btn btn-primary' : 'btn'}`}>
                    Buy {isAdding ? 'Now' : ''}
                </motion.button>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default ProductCard;
