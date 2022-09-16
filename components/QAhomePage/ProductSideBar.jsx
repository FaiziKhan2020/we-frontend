import React from 'react';
import { motion } from 'framer-motion';
import style from './style.module.css';
const ProductSideBar = ({ image, Name, subName1, subName2, subName3 }) => {
    return (
        <div className={style.SideBarBtn}>
            <div class="btn-group dropright mb-4">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <img
                        src={image}
                        alt="trousers"
                        height={30}
                        width={50}
                        className="mr-4"
                    />
                    {Name}
                </motion.button>
                <div
                    class={`dropdown-menu ${style.drop}`}
                    style={{ fontSize: '15px' }}
                    aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">
                        {subName1}
                    </a>
                    <a class="dropdown-item" href="#">
                        {subName2}
                    </a>
                    <a class="dropdown-item" href="#">
                        {subName3}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductSideBar;
