import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Card from '~/components/elements/products/Card';
import { CartProvider } from 'react-use-cart';
import { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
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
            pathname: '/grocery/grocery/filter',
            query: {
                e,
            },
        });
    };

    return (
        <CartProvider>
            <PageContainer title="Shop">
                <div className="ps-page--shop ">
                    <div className="ps-container">
                        <div>
                            <h3
                                className="text-center mx-auto mt-4"
                                style={{
                                    textDecoration: 'underline',
                                }}>
                                BRANDS
                            </h3>
                        </div>
                        <div className="ps-layout--shop">
                            <div className="row">
                                <div class="card-group mx-auto">
                                    {Data.Grocery.map((item, index) => (
                                        <div className="mb-4 mx-auto">
                                            <Card
                                                key={index}
                                                img={item.url}
                                                title={item.title}
                                                onclick={() => send(item.send)}
                                            />
                                        </div>
                                    ))}
                                </div>
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

// import React from 'react';
// import PageContainer from '~/components/layouts/PageContainer';
// import Newletters from '~/components/partials/commons/Newletters';
// import Product from '~/components/elements/products/DemoProduct';
// import { CartProvider } from 'react-use-cart';
// import { useEffect } from 'react';
// import Axios from 'axios';
// import { useState } from 'react';
// import Spinner from '~/components/spinner/index';
// import Router from 'next/router';
// // import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
// const index = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
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

//     const send = (e) => {
//         Router.push({
//             pathname: '/grocery/grocery/filter',
//             query: {
//                 e,
//             },
//         });
//     };

//     return (
//         <CartProvider>
//             <PageContainer title="Shop">
//                 {/* <WidgetShopCategories /> */}

//                 <button onClick={() => send('HEAD & SHOULDERS')}>
//                     HEAD SHOULDERS
//                 </button>
//                 <button onClick={() => send('SAFEGUARD (PAKISTAN)')}>
//                     SAFEGUARD
//                 </button>
//                 <button onClick={() => send('HARPIC')}>HARPIC</button>
//                 <div className="ps-page--shop">
//                     <div className="ps-container">
//                         <div className="ps-layout--shop">
//                             <div className=" row">
//                                 {loading ? (
//                                     data.map((item, index) => (
//                                         <Product
//                                             key={index}
//                                             image={item?.imgUrl}
//                                             title={item.title}
//                                             price={item.price}
//                                             item={item}
//                                         />
//                                     ))
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
