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
            {/* <div class="btn-group dropright mb-4">
                <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <img
                        src="https://res.cloudinary.com/xcltech/image/upload/v1662033042/100/sneakers_irc3pw.png"
                        alt="trousers"
                        height={30}
                        width={50}
                        className="mr-4"
                    />
                    Shoes Men
                </button>
                <div
                    class={`dropdown-menu ${style.drop}`}
                    aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">
                        Action
                    </a>
                    <a class="dropdown-item" href="#">
                        Another action
                    </a>
                    <a class="dropdown-item" href="#">
                        Something else here
                    </a>
                </div>
            </div>
            <div class="btn-group dropright mb-4">
                <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <img
                        src="https://res.cloudinary.com/xcltech/image/upload/v1662032769/100/trousers_za4k76.png"
                        alt="trousers"
                        height={30}
                        width={50}
                        className="mr-4"
                    />
                    Men Pants
                </button>
                <div
                    class={`dropdown-menu ${style.drop}`}
                    aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">
                        Action
                    </a>
                    <a class="dropdown-item" href="#">
                        Another action
                    </a>
                    <a class="dropdown-item" href="#">
                        Something else here
                    </a>
                </div>
            </div>
            <div class="btn-group dropright">
                <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <img
                        src="https://res.cloudinary.com/xcltech/image/upload/v1662033042/100/sneakers_irc3pw.png"
                        alt="trousers"
                        height={30}
                        width={50}
                        className="mr-4"
                    />
                    Shoes Men
                </button>
                <div
                    class={`dropdown-menu ${style.drop}`}
                    aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">
                        Action
                    </a>
                    <a class="dropdown-item" href="#">
                        Another action
                    </a>
                    <a class="dropdown-item" href="#">
                        Something else here
                    </a>
                </div>
            </div> */}
        </div>
    );
};

export default ProductSideBar;
