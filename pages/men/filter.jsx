import React, { useState, useEffect } from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import ProductCard from '~/components/QAhomePage/ProductCard';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import style from '~/components/QAhomePage/style.module.css';
import Axios from 'axios';
import Router, { useRouter } from 'next/router';

import { CartProvider } from 'react-use-cart';

const ShopDefaultPage = () => {
    const router = useRouter();
    const {
        query: { e },
    } = router;

    console.log(e);
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

    const send = (e) => {
        Router.push({
            pathname: '/men/filter',
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
                            <div
                                class="mt-4 dropdown d-flex justify-content-center"
                                style={{ margin: 'auto' }}>
                                <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    style={{
                                        backgroundColor: '#5b0833',
                                        color: 'white',
                                        fontSize: '20px',
                                        borderRadius: '5px',
                                        border: 'none',
                                    }}>
                                    <span class="fa-solid fa-shirt mr-4"></span>
                                    Filters
                                </button>
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                    style={{
                                        fontSize: '18px',
                                        padding: '10px 25px',
                                    }}>
                                    <a
                                        class="dropdown-item"
                                        onClick={() => {
                                            send('shirt');
                                        }}>
                                        shirt
                                    </a>
                                    <a
                                        class="dropdown-item"
                                        onClick={() => {
                                            send('pant');
                                        }}>
                                        Pants
                                    </a>
                                    <a
                                        class="dropdown-item"
                                        onClick={() => {
                                            send('shoes');
                                        }}>
                                        shoes
                                    </a>
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
                                    {data
                                        .filter(
                                            (index) => index.sub_category == e
                                        )
                                        .map((item) => (
                                            <ProductCard
                                                key={item}
                                                imgUrl={item?.imgUrl[0]}
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
