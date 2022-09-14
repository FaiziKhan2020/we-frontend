import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
import PageContainer from '~/components/layouts/PageContainer';
import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';
import Axios from 'axios';
import { CartProvider } from 'react-use-cart';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
const ProductDefaultPage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getProduct(pid) {
        setLoading(true);
        const responseData = await Axios.get(
            // `https://dawoodddocker.herokuapp.com/api/v1/product/${pid}`
            `http://localhost:5000/users/${pid}`
        );
        // console.log(responseData.data);
        if (responseData) {
            setProduct({
                ...responseData.data,
                images: [responseData.data?.imgUrl],
                sizes: [responseData.data.sizes],
                color: [responseData.data.color],
            });
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getProduct(pid);
    }, [pid]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },

        {
            text: product ? product.title : 'Loading...',
        },
    ];
    // Views
    let productView, headerView;
    if (!loading) {
        if (product) {
            productView = <ProductDetailFullwidth product={product} />;
            headerView = (
                <>
                    <HeaderDefault product={product} />
                    <HeaderMobileProduct />
                </>
            );
        } else {
            headerView = (
                <>
                    {/* <HeaderDefault />
                    <HeaderMobileProduct /> */}
                </>
            );
        }
    } else {
        productView = <SkeletonProductDetail />;
    }

    return (
        <CartProvider>
            <PageContainer
                header={headerView}
                title={product ? product.title : 'Loading...'}>
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-page--product">
                    <div className="ps-container">
                        <div className="ps-page__container">
                            <div className="ps-page__left">{productView}</div>
                            {/* <div className="ps-page__right">
                                <ProductWid gets />
                            </div> */}
                        </div>

                        {/* <CustomerBought
                            layout="fullwidth"
                            collectionSlug="deal-of-the-day"
                        /> */}
                        {/* <RelatedProduct collectionSlug="shop-recommend-items" /> */}
                    </div>
                </div>
                {/* <Newletters /> */}
            </PageContainer>
        </CartProvider>
    );
};

export default ProductDefaultPage;
