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
            pathname: '/grocery/juices/filter',
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
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuLink"
                                style={{
                                    overflowY: 'scroll',
                                    height: '300px',
                                }}>
                                {Data.juices.map((item, index) => (
                                    <a
                                        style={{
                                            fontSize: '15px',
                                        }}
                                        class="dropdown-item"
                                        onClick={() => send(item.send)}>
                                        {item.title}
                                    </a>
                                ))}
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

// import React from 'react';
// import PageContainer from '~/components/layouts/PageContainer';
// import Newletters from '~/components/partials/commons/Newletters';
// import Product from '~/components/elements/products/DemoProduct';
// import { CartProvider } from 'react-use-cart';
// import { useEffect } from 'react';
// import Axios from 'axios';
// import { useState } from 'react';
// import Spinner from '~/components/spinner/index';

// import { useRouter } from 'next/router';
// const index = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();
//     const {
//         query: { e },
//     } = router;

//     useEffect(() => {
//         const fetchBags = async () => {
//             try {
//                 const data = await Axios.get(
//                     `https://dawoodddocker.herokuapp.com/api/v1/product/id/84`
//                 );
//                 setData(data.data.data);
//                 setLoading(true);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchBags();
//     }, []);

//     return (
//         <CartProvider>
//             <PageContainer title="Shop">
//                 <div className="ps-page--shop">
//                     <div className="ps-container">
//                         <div className="ps-layout--shop">
//                             <div className="d-flex  row">
//                                 {loading ? (
//                                     data
//                                         .filter(
//                                             (index) => index.Brand_Name == e
//                                         )
//                                         .map((item) => (
//                                             <Product
//                                                 key={item}
//                                                 image={item?.imgUrl}
//                                                 title={item.title}
//                                                 price={item.price}
//                                                 item={item}
//                                             />
//                                         ))
//                                 ) : (
//                                     <Spinner />
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Newletters />
//             </PageContainer>
//         </CartProvider>
//     );
// };

// export default index;
