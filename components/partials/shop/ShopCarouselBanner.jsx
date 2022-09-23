import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { carouselSingle } from '~/utilities/carousel-helpers';

const ShopCarouselBanner = () => {
    return (
        <div className=" mt-4 ps-shop-banner">
            <Slider {...carouselSingle} className="ps-carousel inside">
                <div className="item">
                    <Link href="/">
                        <img
                            src="/static/img/web-banner1.jpg"
                            alt="Q-FASHION"
                        />
                    </Link>
                </div>
                <div className="item">
                    <Link href="/">
                        <img
                            src="/static/img/web-banner2.png"
                            alt="Q-FASHION"
                        />
                    </Link>
                </div>{' '}
                <div className="item">
                    <Link href="/">
                        <img
                            src="/static/img/web-banner3.png"
                            alt="Q-FASHION"
                        />
                    </Link>
                </div>
            </Slider>
        </div>
    );
};

export default ShopCarouselBanner;
