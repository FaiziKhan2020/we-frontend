import React, { useState, useEffect } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import ShopBanner from '~/components/partials/shop/ShopBanner';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import ProductCard from '~/components/QAhomePage/ProductCard';
import ProductSideBar from '~/components/QAhomePage/ProductSideBar';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
// import FakeData from '~/components/QAhomePage/FakeData.json';
import DropDown from '~/components/QAhomePage/DropDown.json';
import style from '~/components/QAhomePage/style.module.css';
import Axios from 'axios';
import { CartProvider } from 'react-use-cart';

const ShopDefaultPage = () => {
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
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop Default',
        },
    ];

    return (
        <CartProvider>
            <PageContainer title="Shop">
                <div className="ps-page--shop">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-container">
                        <ShopBanner />
                        <ShopBrands />
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
                                <div className="col-md-4">
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
                                </div>
                                <div
                                    className={`col-md-8 my-4 ${style.mainCard}`}>
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
                <Newletters />
            </PageContainer>
        </CartProvider>
    );
};
export default ShopDefaultPage;
