import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Product from '~/components/elements/products/DemoProduct';
import { CartProvider } from 'react-use-cart';
import { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
import Spinner from '~/components/spinner/index';
import Router from 'next/router';
import Data from '~/public/static/data/demo';

const index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    `https://dawoodddocker.herokuapp.com/api/v1/product/id/84`
                );
                setData(data.data.data);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();
    }, []);

    const send = (e) => {
        Router.push({
            pathname: '/grocery/dairy/filter',
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
                        <div
                            class="dropdown show"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                                padding: '20px',
                            }}>
                            <a
                                style={{
                                    fontSize: '20px',
                                    backgroundColor: '#de0000',
                                    border: 'none',
                                }}
                                class="btn btn-secondary dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Filters
                            </a>
                            <div className="mb-4 ">
                                <div
                                    class="dropdown-menu"
                                    // key={index}
                                    aria-labelledby="dropdownMenuLink">
                                    {Data.Dairy.map((item, index) => (
                                        <a
                                            style={{ fontSize: '15px' }}
                                            class="dropdown-item"
                                            onClick={() => send(item.send)}>
                                            {item.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div class="d-flex  row">
                            {loading ? (
                                data
                                    .filter(
                                        (index) =>
                                            index.Sub_Cat == 'LIQUID MILK'
                                    )
                                    .map((item) => (
                                        <Product
                                            key={item}
                                            image={item?.imgUrl}
                                            title={item.title}
                                            price={item.price}
                                            item={item}
                                        />
                                    ))
                            ) : (
                                <Spinner />
                            )}
                        </div>
                    </div>
                </div>

                <Newletters />
            </PageContainer>
        </CartProvider>
    );
};

export default index;
