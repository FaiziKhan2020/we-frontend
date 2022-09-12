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
                        color: '#5b0833',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        marginTop: '15px',
                    }}>
                    QA - FASHION
                </span>
            </div>{' '}
        </div>
    );
};

export default MenuCategoriesDropdown;
