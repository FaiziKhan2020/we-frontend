import Link from 'next/link';
import { useCart } from 'react-use-cart';
const MiniCart = ({ ecomerce }) => {
    const { totalUniqueItems } = useCart();

    return (
        <div className="ps-cart--mini">
            <Link href="/shopCartItems/shopCart">
                <a className="header__extra" href="">
                    <i className="icon-bag2" style={{ height: '20px' }}></i>
                    <span>{totalUniqueItems}</span>
                </a>
            </Link>
        </div>
    );
};

export default MiniCart;
