import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import MobileHeaderActions from './modules/MobileHeaderActions';
import Router from 'next/router';
import { Spin } from 'antd';
import ProductSearchResult from '~/components/elements/products/ProductSearchResult';
import axios from 'axios';

const HeaderMobile = () => {
    const [data, setData] = useState([]);
    const inputEl = useRef(null);
    const [isSearch, setIsSearch] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [resultItems, setResultItems] = useState(null);
    const [loading, setLoading] = useState(false);
    // const debouncedSearchTerm = useDebounce(keyword, 300);

    useEffect(() => {
        if (keyword) {
            const getData = async () => {
                setLoading(true);
                const response = await axios.get(
                    // `http://localhost:8080/api/v1/product?query=${keyword}`
                    `https://dawoodddocker.herokuapp.com/api/v1/product?query=${keyword}`
                );

                setResultItems(response.data.data);
                setIsSearch(true);
                setLoading(false);
            };
            if (keyword.length > 2) {
                getData();
            } else {
                setIsSearch(false);
            }
        }
    }, [keyword]);

    function handleClearKeyword() {
        setKeyword('');
        setIsSearch(false);
        setLoading(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push(`/search?keyword=${keyword}`);
    }

    let productItemsView,
        clearTextView,
        // selectOptionView,
        loadingView,
        loadMoreView;
    if (!loading) {
        if (resultItems && resultItems.length > 0) {
            console.log('first');
            if (resultItems.length > 5) {
                loadMoreView = (
                    <div className="ps-panel__footer text-center">
                        <Link href={`/search?keyword=${keyword}`}>
                            <a>See all results</a>
                        </Link>
                    </div>
                );
            }
            productItemsView = resultItems.map((product) => (
                <ProductSearchResult product={product} key={product.id} />
            ));
        } else {
            productItemsView = <p>No product found.</p>;
        }
        if (keyword !== '') {
            clearTextView = (
                <span className="ps-form__action" onClick={handleClearKeyword}>
                    <i className="icon icon-cross2"></i>
                </span>
            );
        }
    } else {
        loadingView = (
            <span className="ps-form__action">
                <Spin size="small" />
            </span>
        );
    }

    return (
        <header className="header header--mobile">
            <div className="header__top">
                <div className="header__right">
                    <p>Welcome to QA Shopping Store !</p>
                </div>
            </div>

            <div className="navigation--mobile">
                <div className="navigation__left">
                    <Link href="/">
                        <a className="ps-logo">
                            <img
                                src="/static/img/white-logo.png"
                                alt="Q-FASHION"
                                width={50}
                            />
                        </a>
                    </Link>
                </div>
                <MobileHeaderActions />
            </div>
            <div className="ps-search--mobile">
                <form
                    className="ps-form--quick-search"
                    method="get"
                    action="/"
                    onSubmit={handleSubmit}>
                    {/* <div className="ps-form__categories">
                <select className="form-control">{selectOptionView}</select>
            </div> */}
                    <div className="ps-form__input">
                        <input
                            ref={inputEl}
                            className="form-control"
                            type="text"
                            value={keyword}
                            placeholder="I'm shopping for..."
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        {clearTextView}
                        {loadingView}
                    </div>
                    <button onClick={handleSubmit}>Search</button>
                    <div
                        className={`ps-panel--search-result${
                            isSearch ? ' active ' : ''
                        }`}>
                        <div className="ps-panel__content">
                            {productItemsView}
                        </div>
                        {loadMoreView}
                    </div>
                </form>
            </div>
        </header>
    );
};

export default HeaderMobile;
