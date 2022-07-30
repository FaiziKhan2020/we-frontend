import React, { useState, useEffect } from 'react';
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
import HashLoader from 'react-spinners/HashLoader';

const HomepageDefaultPage = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    return (
        <div>
            {loading ? (
                <HashLoader
                    color={'#de0000'}
                    loading={loading}
                    size={50}
                    style={{ margin: 'auto' }}
                />
            ) : (
                <CartProvider>
                    <PageContainer title="Online">
                        <main id="homepage-1">
                            <HomeDefaultBanner />
                            <SiteFeatures />
                            <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
                            <HomeAdsColumns />
                            <HomeDefaultTopCategories />

                            <HomeAds />
                            <DownLoadApp />
                            <Newletters />
                        </main>
                    </PageContainer>
                </CartProvider>
            )}
        </div>
    );
};

export default HomepageDefaultPage;
