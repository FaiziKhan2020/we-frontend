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
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';

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

    const send = (e) => {
        Router.push({
            pathname: '/grocery/confectionery/filter',
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
                        <div className="ps-layout--shop">
                            <div className="ps-layout__left">
                                {/* <WidgetShopCategories /> */}
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        Cras justo odio
                                    </li>
                                    <li class="list-group-item">
                                        Dapibus ac facilisis in
                                    </li>
                                    <li class="list-group-item">
                                        Morbi leo risus
                                    </li>
                                    <li class="list-group-item">
                                        Porta ac consectetur ac
                                    </li>
                                    <li class="list-group-item">
                                        Vestibulum at eros
                                    </li>
                                </ul>
                            </div>
                            <div className="ps-layout__right">
                                <div class="card-group mx-auto">
                                    {Data.confectionery.map((item, index) => (
                                        <div className="mb-4 ">
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

// const index = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchBags = async () => {
//             try {
//                 const data = await Axios.get(
//                     // `http://localhost:8082/api/v1/product`
//                     // `https://dawoodbackend.herokuapp.com/api/v1/product/id/3`
//                     // `http://localhost:8080/api/v1/product/id/3`
//                     // `https://dawoodddocker.herokuapp.com/api/v1/product/id/1`
//                     // `http://localhost:8080/api/v1/product/id/174`
//                     `https://dawoodddocker.herokuapp.com/api/v1/product/id/14`
//                 );
//                 setData(data.data.data);
//                 setLoading(true);
//             } catch (error) {
//                 console.log(error);
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
