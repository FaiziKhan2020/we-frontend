import React from 'react';
import { motion } from 'framer-motion';
import style from './style.module.css';
import Link from 'next/link';
const ProductSideBar = ({
    image,
    Name,
    subName1,
    subName2,
    subName3,
    jana,
}) => {
    console.log(jana);
    return (
        <div className={style.SideBarBtn}>
            <div className="my-2">
                <Link href={jana}>
                    <motion.button
                        className="btn btn-primary"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button">
                        <img
                            src={image}
                            alt="ProductSideBar img"
                            height={40}
                            width={40}
                            className="mx-4"
                        />
                        {Name}
                    </motion.button>
                </Link>
            </div>
        </div>
    );
};

export default ProductSideBar;
