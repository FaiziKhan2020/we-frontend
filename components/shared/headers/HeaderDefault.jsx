import React, { useEffect } from 'react';
import Logo from '~/components/elements/common/Logo';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
// import Searchbar222 from '~/components/shared/headers/modules/Searchbar222';
import NavigationDefault from '~/components/shared/navigation/NavigationDefault';
import HeaderActions from '~/components/shared/headers/modules/HeaderActions';
import { stickyHeader } from '~/utilities/common-helpers';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';

const HeaderDefault = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--1"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div>
                    <marquee
                        style={{
                            fontSize: '20px',
                            color: 'white',
                            fontWeight: 'bold',
                        }}>
                        Online grocery shopping here only for Hyderabad.
                    </marquee>
                </div>
                <div className="ps-container">
                    <div className="header__left">
                        <Logo />
                        <MenuCategoriesDropdown />
                    </div>
                    <div
                        className="header__center"
                        style={{ marginTop: '30px' }}>
                        <SearchHeader />
                    </div>
                    <div
                        className="header__right"
                        style={{ marginTop: '10px' }}>
                        <HeaderActions />
                    </div>
                </div>
            </div>
            <NavigationDefault />
        </header>
    );
};

export default HeaderDefault;
