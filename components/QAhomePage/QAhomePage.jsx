import React, { useState, useEffect } from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import style from './style.module.css';
import MiniBanners from './MiniBanners';
import ShopCarouselBanner from '../partials/shop/ShopCarouselBanner';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import ProductSideBar from './ProductSideBar';
import { CartProvider } from 'react-use-cart';
import DropDown from './DropDown.json';
import Axios from 'axios';

const QAhomePage = () => {
    const [data, setData] = useState([]);

    // * Pgination
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(6);

    // * fetching data
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await Axios.get(`http://localhost:5000/users`);
                setData(data.data);
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
                            {currentPosts.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    imgUrl={item?.imgUrl[0]}
                                    title={item.title}
                                    price={item.price}
                                    item={item}
                                    loading={loading}
                                />
                            ))}
                        </div>
                        // ? pagination
                        <div className="ml-auto my-4 mr-4">
                            <Pagination
                                productPerPage={productPerPage}
                                totalProduct={data.length}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                </div>
            </PageContainer>
        </CartProvider>
    );
};

export default QAhomePage;
