import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';
import Select from 'react-select';
const ModuleDetailActionsMobile = ({ product }) => {
    const [Gender, setGender] = useState('');
    const { addItem } = useCart();
    const Router = useRouter();
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
        <div>
            <div className="my-4">
                {console.log(Gender)}
                <Select
                    options={product.sizes[0]}
                    isClearable
                    placeholder="Size"
                    onChange={(e) => setGender(e.value)}
                />
            </div>
            <a
                className="ps-btn my-4"
                onClick={(e) => handleBuynow(e)}
                style={{ color: 'white' }}>
                Buy Now
            </a>
        </div>
    );
};

export default connect((state) => state)(ModuleDetailActionsMobile);
