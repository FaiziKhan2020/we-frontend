import React from 'react';
// import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Product from '~/components/elements/products/DemoProduct';
// import data from '@@/public/static/data/bags';
// import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
// import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
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

    return (
        <CartProvider>
            <PageContainer title="Shop">
                <div className="ps-page--shop">
                    <div className="ps-container">
                        <div className="ps-layout--shop">
                            {/* <div className="ps-layout__left">
                                <WidgetShopCategories />
                                <WidgetShopBrands />
                                <WidgetShopFilterByPriceRange />
                            </div> */}
                            {/* <div className="ps-layout__right "> */}
                            {/* <div className="d-flex justify-content-center row"> */}
                            <div className="d-flex  row">
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
                                {/* {data.map((item, index) => (
                                        <Product
                                            key={index}
                                            image={item?.imgUrl}
                                            title={item.title}
                                            price={item.price}
                                            item={item}
                                        />
                                    ))} */}
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <Newletters />
            </PageContainer>
        </CartProvider>
    );
};

export default index;
