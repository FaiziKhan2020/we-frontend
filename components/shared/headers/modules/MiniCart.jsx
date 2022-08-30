import Link from 'next/link';
import { useCart } from 'react-use-cart';
const MiniCart = ({ ecomerce }) => {
    const { totalUniqueItems } = useCart();

    return (
        <div className="ps-cart--mini">
            {/* <Link href="/shopCartItems/shopCart"> */}
            <a className="header__extra" href="#">
                <i className="icon-bag2" style={{ height: '20px' }}></i>
                <span>
                    {/* <i>{products ? products.length : 0}</i> */}
                    {totalUniqueItems}
                </span>
            </a>
            {/* </Link> */}
            {/* {cartItemsView} */}
        </div>
    );
};

export default MiniCart;
