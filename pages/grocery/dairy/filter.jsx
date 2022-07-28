import React from 'react';
import Router from 'next/router';

import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Product from '~/components/elements/products/DemoProduct';
import { CartProvider } from 'react-use-cart';
import { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
import Spinner from '~/components/spinner/index';
import Data from '~/public/static/data/demo';

import { useRouter } from 'next/router';
const index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const {
        query: { e },
    } = router;

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
                        
                       
                                {/* <WidgetShopCategories /> */}
                                
                           
                            {/* <List/> */}
                         
                            <div class="card-group mx-auto ">
                    <div class="dropdown show">
                        <a
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
                            <a class="dropdown-item" onClick={() => send(item.send)} >
                              {item.title}
                            </a>
                            
                            ))}
                            </div>
                        </div>
                      
                    </div>
                    
           
        </div>
                            <div className="d-flex  row">
                                {loading ? (
                                    data
                                        .filter((index) => index.Sub_Cat == e)
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
