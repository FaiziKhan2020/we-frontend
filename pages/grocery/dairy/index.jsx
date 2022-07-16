import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
// import Product from '~/components/elements/products/DemoProduct';
import Card from '~/components/elements/products/Card';
import { CartProvider } from 'react-use-cart';
import { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
// import Spinner from '~/components/spinner/index';
import Router from 'next/router';
// import Link from 'next/link';
// import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
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
                {/* <WidgetShopCategories /> */}

                {/* <button onClick={() => send('HEAD & SHOULDERS')}>
                    HEAD SHOULDERS
                </button>
                <button onClick={() => send('SAFEGUARD (PAKISTAN)')}>
                    SAFEGUARD
                </button>
                <button onClick={() => send('HARPIC')}>HARPIC</button> */}
                <div className="ps-page--shop ">
                    <div className="ps-container">
                        <div className="ps-layout--shop">
                            <div className="row">
                                <div class="card-group pt-4 mx-auto">
                                    <Card
                                        img="https://res.cloudinary.com/xcltech/image/upload/v1649843235/200/NATIONAL_MAYOCHUP_SAUCE_500GM_POUCH_oodozz.jpg"
                                        title="Milk"
                                        onclick={() => send('LIQUID MILK')}
                                    />
                                    <Card
                                        img="https://res.cloudinary.com/xcltech/image/upload/v1649843235/200/NATIONAL_MAYOCHUP_SAUCE_500GM_POUCH_oodozz.jpg"
                                        title="Cheese"
                                        onclick={() => send('CHEESE')}
                                    />
                                    <Card
                                        img="https://res.cloudinary.com/xcltech/image/upload/v1649843235/200/NATIONAL_MAYOCHUP_SAUCE_500GM_POUCH_oodozz.jpg"
                                        title="Butter"
                                        onclick={() => send('BUTTER')}
                                    />
                                    <Card
                                        img="https://res.cloudinary.com/xcltech/image/upload/v1649843235/200/NATIONAL_MAYOCHUP_SAUCE_500GM_POUCH_oodozz.jpg"
                                        title="Tea Whiteners"
                                        onclick={() => send('TEA')}
                                    />
                                    <Card
                                        img="https://res.cloudinary.com/xcltech/image/upload/v1649843235/200/NATIONAL_MAYOCHUP_SAUCE_500GM_POUCH_oodozz.jpg"
                                        title="Milk Supliments"
                                        onclick={() => send('POWDER MILK')}
                                    />
                                    <Card
                                        img="https://res.cloudinary.com/xcltech/image/upload/v1649843235/200/NATIONAL_MAYOCHUP_SAUCE_500GM_POUCH_oodozz.jpg"
                                        title="Bread"
                                        onclick={() => send('BREAD CRUMB')}
                                    />{' '}
                                    <Card
                                        img="https://res.cloudinary.com/xcltech/image/upload/v1649843235/200/NATIONAL_MAYOCHUP_SAUCE_500GM_POUCH_oodozz.jpg"
                                        title="Yogurt/Raita"
                                        onclick={() => send('YOGURT')}
                                    />
                                </div>
                            </div>
                            {/* <div className=" row">
                                {loading ? (
                                    data.map((item, index) => (
                                        <Product
                                            key={index}
                                            image={item?.imgUrl}
                                            title={item.title}
                                            price={item.price}
                                            item={item}
                                        />
                                    ))
                                ) : (
                                    <Spinner />
                                )}
                            </div> */}
                        </div>
                    </div>
                </div>
                <Newletters />
            </PageContainer>
        </CartProvider>
    );
};

export default index;
