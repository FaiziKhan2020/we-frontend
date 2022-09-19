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
            <div>
                <Link href={jana}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        // data-toggle="dropdown"
                        // aria-haspopup="true"
                        // aria-expanded="false"
                    >
                        <img
                            src={image}
                            alt="trousers"
                            height={30}
                            width={50}
                            className="mr-4"
                        />
                        {Name}
                    </motion.button>
                </Link>
            </div>
        </div>
    );
};

export default ProductSideBar;
