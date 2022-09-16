import React, { useState,useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { motion } from 'framer-motion';
import Axios from "axios";
import router from 'next/router';

import style from '~/components/QAhomePage/style.module.css';
import data from '~/public/static/data/bags';
const ModuleDetailActionsMobile = ({product}) => {
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
    const [value, setValue] = useState("");
    const [data,setData]=useState("");
    const pid=router.query
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

    const handleChange = (e) => {
        setValue(e.target.value);
      };

      useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await Axios.get(`http://127.0.0.1:8000/view-product/`);
                setData(data.data.products);
                // console.log(data.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

console.log(data[0])
    return (
        <div>
            <div className="my-4">
                <div className="my-4">
                    {/* <Select
                        isClearable
                        isSearchable={false}
                        required
                        options={product.color[0]}
                        placeholder="Please Select Size"
                        onChange={(e) => setColor(e.value)}
                    /> */}
                </div>
                <div>

      <select value={value} onChange={handleChange}>
        {/* {data.map((item,index)=>{
            <option value="Orange">Orange</option>
        })} */}
        
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option>
      </select>
      <p>{`You selected ${value}`}</p>
    </div>
                {/* <Select
                    isClearable
                    isSearchable={false}
                    required
                    options={product.sizes[0]}
                    placeholder="Please Select Size"
                    onChange={(e) => setSize(e.value)}
                /> */}
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
