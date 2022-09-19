import React from 'react';
// import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
// import Rating from '~/components/elements/Rating';
import { useCart } from 'react-use-cart';
import Link from 'next/link';
const DemoProduct = ({ image, title, price, item }) => {
    const { addItem } = useCart();

    return (
        <div className="row" style={{ margin: 'auto' }}>
            <div className="ps-product ">
                <div
                    className="ps-product__thumbnail"
                    style={{
                        width: '150px',
                        cursor: 'pointer',
                        borderRadius: '6px',
                    }}>
                    <Link href="/product/[pid]" as={`/product/${item?.id}`}>
                        <img
                            referrerPolicy="no-referrer"
                            src={image}
                            alt="Product_image"
                            height={140}
                        />
                    </Link>

                    <button
                        className="ps-product__actions"
                        style={{
                            padding: '5px 20px',
                            border: 'none',
                            color: 'white',
                            backgroundColor: '#de0000',
                        }}
                        onClick={() => addItem(item)}>
                        Add to cart
                    </button>
                </div>
                <div className="ps-product__container">
                    <a
                        className="ps-product__vendor"
                        style={{ width: '160px' }}>
                        {title}
                    </a>
                    <div className="ps-product__content">QR. {price}</div>
                </div>
            </div>
        </div>
    );
};

export default DemoProduct;
