import React from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import PageContainer from '~/components/layouts/PageContainer';
import { CartProvider } from 'react-use-cart';
const HomepageDefaultPage = () => {
    return (
        <CartProvider>
            <PageContainer title="Online">
                <main id="homepage-1">
                    <HomeDefaultBanner />
                    <SiteFeatures />
                    <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
                    <HomeAdsColumns />
                    <HomeDefaultTopCategories />
                    {/* <HomeDefaultProductListing
                        collectionSlug="consumer-electronics"
                        title="Consumer Electronics"
                    />
                    <HomeDefaultProductListing
                        collectionSlug="clothings"
                        title="Clothing"
                    />
                    <HomeDefaultProductListing
                        collectionSlug="garden-and-kitchen"
                        title="Garden & Kitchen"
                    /> */}
                    <HomeAds />
                    <DownLoadApp />
                    {/* <NewArrivals collectionSlug="new-arrivals-products" /> */}
                    <Newletters />
                </main>
            </PageContainer>
        </CartProvider>
    );
};

export default HomepageDefaultPage;
