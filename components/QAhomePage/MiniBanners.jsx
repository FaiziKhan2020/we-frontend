import React from 'react';
import style from './style.module.css';
const MiniBanners = () => {
    return (
        <div className={style.mainBox}>
            <div className={style.box1}>
                <div>
                    <h4>Express Delivery</h4>
                    <p>With selected items</p>
                    <button className="btn">Save Now</button>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/xcltech/image/upload/v1661935960/100/Fast_Delivery_oe5gxo.png"
                        alt="FastDelivery"
                    />
                </div>
            </div>
            <div className={style.box1}>
                <div>
                    <h4>Cash on Delivery</h4>
                    <p>With selected items</p>
                    <button className="btn">Save Now</button>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/xcltech/image/upload/v1661935960/100/COD_qqegun.png"
                        alt="FastDelivery"
                    />
                </div>
            </div>
            <div className={style.box1}>
                <div>
                    <h4>Gift Vouchers</h4>
                    <p>With selected items</p>
                    <button className="btn">Save Now</button>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/xcltech/image/upload/v1661935960/100/voucher_eulsz4.png"
                        alt="FastDelivery"
                    />
                </div>
            </div>
        </div>
    );
};

export default MiniBanners;
