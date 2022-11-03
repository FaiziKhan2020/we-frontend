import React, { useState, useEffect } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import ShopBanner from '~/components/partials/shop/ShopBanner';
import PageContainer from '~/components/layouts/PageContainer';
import ProductCard from '~/components/QAhomePage/ProductCard';
import ProductSideBar from '~/components/QAhomePage/ProductSideBar';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import DropDown from '~/components/QAhomePage/DropDown.json';
import style from '~/components/QAhomePage/style.module.css';
import Axios from 'axios';
import { CartProvider } from 'react-use-cart';
import Pagination from '~/components/QAhomePage/Pagination';
const ShopDefaultPage = () => {
    const [data, setData] = useState([]);

    // * Pgination
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(10);
    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            try {
                const data = await Axios.get(
                    `http://localhost:8080/api/v1/product/`
                );
                setData(data.data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);
    // * Get current Product Page
    const indexOfLastPage = currentPage * productPerPage;
    const indexOfFirstPage = indexOfLastPage - productPerPage;
    const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage);

    // * Change current Product Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                    {/* <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" /> */}
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
                                <div className="col-md-2">
                                    {DropDown.map((item) => (
                                        <ProductSideBar
                                            key={item}
                                            image={item.image}
                                            Name={item.Name}
                                            jana={item.jana}
                                        />
                                    ))}
                                </div>
                                <div
                                    className={`col-md-10 my-4 ${style.mainCard}`}>
                                    {currentPosts.map((item) => (
                                        <ProductCard
                                            key={item.id}
                                            imgUrl={item?.imgUrl}
                                            title={item.title}
                                            price={item.price}
                                            item={item}
                                            loading={loading}
                                        />
                                    ))}
                                </div>
                                <div className="ml-auto my-4 mr-4">
                                    <Pagination
                                        productPerPage={productPerPage}
                                        totalProduct={data.length}
                                        paginate={paginate}
                                    />
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
