import React, { useState, useEffect } from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import ProductCard from '~/components/QAhomePage/ProductCard';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import style from '~/components/QAhomePage/style.module.css';
import Axios from 'axios';
import Router from 'next/router';
import FakeData from './fakeData.json';

import { CartProvider } from 'react-use-cart';
import Link from 'next/link';

const ShopDefaultPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await Axios.get(
                    `http://localhost:8080/api/v1/product/id/3`
                );
                setData(data.data.data);
                // console.log(data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);
    const send = (e) => {
        Router.push({
            pathname: '/kid/filter',
            query: {
                e,
            },
        });
    };

    return (
        <CartProvider>
            <PageContainer title="Shop">
                <div className="ps-page--shop">
                    <div className="ps-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div
                                        className={`my-4 ${style.searchBarShop}`}>
                                        <SearchHeader />
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                {/* <div className="col-md-4">

                                    
                                    {DropDown.map((item) => (
                                        <ProductSideBar
                                            key={item}
                                            image={item.image}
                                            Name={item.Name}
                                            subName1={item.subName1}
                                            subName2={item.subName2}
                                            subName3={item.subName3}
                                        />
                                    ))}
                                </div> */}
                                <div
                                    className={`col-md-12 my-4 ${style.mainCard}`}>
                                    {data.map((item) => (
                                        <ProductCard
                                            key={item}
                                            imgUrl={item?.imgUrl}
                                            title={item.title}
                                            price={item.price}
                                            item={item}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </CartProvider>
    );
};
export default ShopDefaultPage;
