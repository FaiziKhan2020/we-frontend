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
import List from "./list"

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
                     
                          
                                {/* <WidgetShopCategories /> */}
   
                            
                           
                                <List/>
                                <div class="d-flex  row">
                                {loading ? (
                                    data
                                        .map((item,index) => (
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
// // import Product from '~/components/elements/products/DemoProduct';
// import Card from '~/components/elements/products/Card';
// import { CartProvider } from 'react-use-cart';
// import { useEffect } from 'react';
// import Axios from 'axios';
// import { useState } from 'react';
// import Router from 'next/router'; 
// import Data from '~/public/static/data/demo';
// import List from "./list"
// import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
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
//             pathname: '/grocery/dairy/filter',
//             query: {
//                 e,
//             },
//         });
//     };

//     return (
//         <CartProvider>
//             <PageContainer title="Shop">
//                 <div className="ps-page--shop ">
//                     <div className="ps-container">
//                         <div>

//                         </div>
//                         <div className="ps-layout--shop">
//                             <div className="row mt-4">
//                                 <div class="card-group mx-auto">
//                                 {/* <WidgetShopCategories /> */}
//                                     <List/>
//                                     {Data.Dairy.map((item, index) => (
//                                         <div className="mb-4  ">
                                            
//                                             {/* <ul classname="list-group">
//                                                 <a onClick={() => send(item.send)} ><li classname="list-group-item">{item.title}</li></a>
                                            
//                                             </ul> */}
//                                             {/* <Card
//                                                 key={index}
//                                                 img={item.url}
//                                                 title={item.title}
//                                                 onclick={() => send(item.send)}
//                                             /> */}
//                                         </div>
//                                     ))}
//                                 </div>
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
