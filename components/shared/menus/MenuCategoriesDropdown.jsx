import React from 'react';
// import menuData from '~/public/static/data/menu.json';
// import Menu from '~/components/elements/menu/Menu';
import Logo from '~/components/elements/common/Logo';

const MenuCategoriesDropdown = () => {
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                {/* <i className="icon-menu"> </i>{' '} */}
                <span
                    style={{
                        color: 'purple',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        marginTop: '15px',
                    }}>
                    QA - FASHION
                </span>
            </div>{' '}
            {/* <div
                className="menu__content"
                style={{
                    color: 'white',
                    textTransform: 'uppercase',
                    height: '400px',
                    overflowX: 'auto',
                    overflowY: 'auto',
                    textAlign: 'justify',
                }}>
                <Menu
                    source={menuData.product_categories}
                    className="menu--dropdown"
                />
            </div>{' '} */}
        </div>
    );
};

export default MenuCategoriesDropdown;
