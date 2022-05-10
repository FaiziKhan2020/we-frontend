import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Product from '~/components/elements/products/DemoProduct';
import { CartProvider } from 'react-use-cart';
import { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
import Spinner from '~/components/spinner/index';

const index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    `https://dawoodddocker.herokuapp.com/api/v1/product/id/14`
                );
                setData(data.data.data);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();
    }, []);

    return (
        <CartProvider>
            <PageContainer title="Shop">
                <div className="ps-page--shop">
                    <div className="ps-container">
                        <div className="ps-layout--shop">
                            <div className="d-flex  row">
                                {loading ? (
                                    data
                                        .filter(
                                            (index) =>
                                                index.Sub_Cat == 'BISCUITS'
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
                </div>
                <Newletters />
            </PageContainer>
        </CartProvider>
    );
};

export default index;
