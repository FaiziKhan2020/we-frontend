import React, { useEffect } from 'react';
import Logo from '~/components/elements/common/Logo';
// import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
// import NavigationDefault from '~/components/shared/navigation/NavigationDefault';
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
                <div className="ps-container">
                    <div className="header__left">
                        <Logo />
                        <MenuCategoriesDropdown />
                    </div>
                    <div
                        class="dropdown"
                        style={{ margin: '20px 100px 0px 0px' }}>
                        <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{
                                backgroundColor: '#5b0833',
                                color: 'white',
                                fontSize: '20px',
                                borderRadius: '5px',
                                border: 'none',
                            }}>
                            <span class="fa-solid fa-shirt mr-4"></span>
                            Clothing
                        </button>
                        <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                            style={{ fontSize: '12px' }}>
                            <a class="dropdown-item" href="#">
                                Action
                            </a>
                            <a class="dropdown-item" href="#">
                                Another action
                            </a>
                            <a class="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </div>
                    <div className="header__center"></div>
                    <div
                        className="header__right"
                        style={{ marginTop: '15px' }}>
                        <HeaderActions />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDefault;
