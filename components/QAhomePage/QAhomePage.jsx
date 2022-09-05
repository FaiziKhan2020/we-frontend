import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import style from './style.module.css';
import MiniBanners from './MiniBanners';
import ShopCarouselBanner from '../partials/shop/ShopCarouselBanner';
import ProductCard from './ProductCard';
import ProductSideBar from './ProductSideBar';
import { CartProvider } from 'react-use-cart';
import FakeData from './FakeData.json';
import DropDown from './DropDown.json';

const QAhomePage = () => {
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
                        <div className={`col-md-8 ${style.mainCard}`}>
                            {FakeData.map((item) => (
                                <ProductCard
                                    key={item}
                                    image={item?.image}
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
