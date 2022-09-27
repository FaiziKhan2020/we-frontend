import React, { useState, useEffect } from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import style from './style.module.css';
import MiniBanners from './MiniBanners';
import ShopCarouselBanner from '../partials/shop/ShopCarouselBanner';
import ProductCard from './ProductCard';
import ProductSideBar from './ProductSideBar';
import { CartProvider } from 'react-use-cart';
// import FakeData from './FakeData.json';
import DropDown from './DropDown.json';
import Axios from 'axios';

const QAhomePage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await Axios.get(`http://localhost:5000/users`);
                setData(data.data);
                // console.log(data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);
    // console.log(data);
    return (
        <CartProvider>
            <PageContainer>
                <ShopCarouselBanner />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={style.searchBar}>
                                <SearchHeader />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <MiniBanners />
                        </div>
                    </div>
                    <div className="row mt-4 mx-auto">
                        <div className="col-md-4 mt-4">
                            {DropDown.map((item) => (
                                <ProductSideBar
                                    key={item.id}
                                    image={item.image}
                                    Name={item.Name}
                                    jana={item.jana}
                                />
                            ))}
                        </div>
                        <div className={`col-md-8 my-4 ${style.mainCard}`}>
                            {data.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    imgUrl={item?.imgUrl[0]}
                                    title={item.title}
                                    price={item.price}
                                    item={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </PageContainer>
        </CartProvider>
    );
};

export default QAhomePage;
