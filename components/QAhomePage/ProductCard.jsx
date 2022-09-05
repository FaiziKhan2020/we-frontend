import React, { useState } from 'react';
import style from './style.module.css';
import { useCart } from 'react-use-cart';

const ProductCard = ({ image, title, price, item }) => {
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
                    <img
                        referrerPolicy="no-referrer"
                        src={image}
                        alt="Product_image"
                        height={180}
                    />
                </div>
                <div className={`py-4 ${style.Productext}`}>
                    <div className="font-weight-bold">{title}</div>{' '}
                    <div>QR. {price} </div>
                </div>
                <button
                    type="button"
                    className={`${isAdding ? 'btn btn-primary' : 'btn'}`}
                    onClick={() => {
                        addItem(item);
                        total();
                    }}>
                    ADD{isAdding ? 'ED' : ''}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
