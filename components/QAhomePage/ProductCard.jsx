import React from 'react';
import style from './style.module.css';
import { useCart } from 'react-use-cart';

const ProductCard = ({ image, title, price, item }) => {
    const { addItem } = useCart();
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
                <button className="btn" onClick={() => addItem(item)}>
                    Add to Card
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
