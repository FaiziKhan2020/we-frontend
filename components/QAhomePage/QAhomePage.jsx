import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import ReactSlider from './ReactSlider';
import style from './style.module.css';
const QAhomePage = () => {
    return (
        <PageContainer>
            <ReactSlider />
            <h1>product</h1>
        </PageContainer>
    );
};

export default QAhomePage;
