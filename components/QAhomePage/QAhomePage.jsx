import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import ReactSlider from './ReactSlider';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import style from './style.module.css';
import MiniBanners from './MiniBanners';
const QAhomePage = () => {
    return (
        <PageContainer>
            <div className={style.bgImg}></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={style.searchBar}>
                            <SearchHeader />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* <h1 className={style.headingH1}>product</h1> */}
                <div className="row">
                    <div className="col-md-12">
                        <MiniBanners />
                    </div>
                </div>
                <h2>asd</h2>
            </div>
        </PageContainer>
    );
};

export default QAhomePage;
