import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import ReactSlider from './ReactSlider';
import style from './style.module.css';
const QAhomePage = () => {
    return (
        <PageContainer>
            {/* <ReactSlider /> */}
            <div className={style.bgImg}></div>
            <div className="container">
                <h1 className={style.headingH1}>product</h1>
            </div>
        </PageContainer>
    );
};

export default QAhomePage;
