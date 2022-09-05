import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
// import ShopItems from '~/components/partials/shop/ShopItems';
// import ProductGroupByCarousel from '~/components/partials/product/ProductGroupByCarousel';
// import ShopCategories from '~/components/partials/shop/ShopCategories';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import ShopBanner from '~/components/partials/shop/ShopBanner';
// import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
// import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
// import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import ProductCard from '~/components/QAhomePage/ProductCard';
import ProductSideBar from '~/components/QAhomePage/ProductSideBar';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import FakeData from '~/components/QAhomePage/FakeData.json';
import DropDown from '~/components/QAhomePage/DropDown.json';
import style from '~/components/QAhomePage/style.module.css';
const ShopDefaultPage = () => {
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
        <PageContainer title="Shop">
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <ShopBanner />
                    <ShopBrands />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={`my-4 ${style.searchBarShop}`}>
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
                    {/* <ShopCategories /> */}
                    {/* <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            <WidgetShopBrands />
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className="ps-layout__right">
                            <ProductGroupByCarousel
                                collectionSlug="shop-best-seller-items"
                                title="Best Sale Items"
                            />
                            <ProductGroupByCarousel
                                collectionSlug="shop-recommend-items"
                                title="Recommended Items"
                            />
                            <ShopItems columns={6} pageSize={18} />
                        </div>
                    </div> */}
                </div>
            </div>
            <Newletters />
        </PageContainer>
    );
};
export default ShopDefaultPage;
