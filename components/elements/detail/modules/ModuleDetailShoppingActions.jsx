import React from 'react'

const ModuleDetailShoppingActions = () => {
  return (
    <div>ModuleDetailShoppingActions</div>
  )
}

export default ModuleDetailShoppingActions

// import React, { useState } from 'react';
// import { connect, useDispatch } from 'react-redux';
// import { useRouter } from 'next/router';
// import { Modal } from 'antd';
// import { useCart } from 'react-use-cart';

// const ModuleDetailShoppingActions = ({
//     ecomerce,
//     product,
//     extended = false,
//     item,
// }) => {
//     const { addItem } = useCart();
//     const [quantity, setQuantity] = useState(1);
//     const Router = useRouter();

//     function handleBuynow(e) {
//         e.preventDefault();

//         addItem({
//             id: product.id,
//             price: product.price,
//             title: product.title,
//             imgUrl: product.imgUrl,
//         });

//         setTimeout(function () {
//             Router.push('/shopCartItems/shopCart');
//         }, 1000);
//     }

//     const handleAddItemToCompare = (e) => {
//         e.preventDefault();
//         e.preventDefault();
//         addItem({ id: product.id }, ecomerce.compareItems, 'compare');
//         const modal = Modal.success({
//             centered: true,
//             title: 'Success!',
//             content: `This product has been added to compare listing!`,
//         });
//         modal.update;
//     };

//     const handleAddItemToWishlist = (e) => {
//         e.preventDefault();
//         addItem({ id: product.id }, ecomerce.wishlistItems, 'wishlist');
//         const modal = Modal.success({
//             centered: true,
//             title: 'Success!',
//             content: `This item has been added to your wishlist`,
//         });
//         modal.update;
//     };

//     function handleIncreaseItemQty(e) {
//         e.preventDefault();
//         setQuantity(quantity + 1);
//     }

//     function handleDecreaseItemQty(e) {
//         e.preventDefault();
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     }
//     if (!extended) {
//         return (
//             <div className="ps-product__shopping">
//                 {/* {items.map((item) => (
//                     <figure>
//                         <figcaption>Quantity</figcaption>
//                         <div className="form-group--number">
//                             <button
//                                 className="up"
//                                 onClick={(e) =>
//                                     updateItemQuantity(
//                                         item.id,
//                                         item.quantity + 1
//                                     )
//                                 }>
//                                 <i className="fa fa-plus"></i>
//                             </button>
//                             <button
//                                 className="down"
//                                 onClick={(e) =>
//                                     updateItemQuantity(
//                                         item.id,
//                                         item.quantity - 1
//                                     )
//                                 }>
//                                 <i className="fa fa-minus"></i>
//                             </button>
//                             <input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder={item.quantity}
//                                 disabled={true}
//                             />
//                         </div>
//                     </figure>
//                 ))}
//                 <a
//                     className="ps-btn ps-btn--black"
//                     onClick={() =>
//                         addItem({
//                             id: product.id,
//                             price: product.price,
//                             title: product.title,
//                         })
//                     }>
//                     Add to cart
//                 </a> */}
//                 {/* <a className="ps-btn" onClick={(e) => handleBuynow(e)}>
//                     Buy Now
//                 </a>
//                 <div className="ps-product__actions"></div> */}
//             </div>
//         );
//     } else {
//         return (
//             <div className="ps-product__shopping extend">
//                 <div className="ps-product__btn-group">
//                     <figure>
//                         <figcaption>Quantity</figcaption>
//                         <div className="form-group--number">
//                             <button
//                                 className="up"
//                                 onClick={(e) => handleIncreaseItemQty(e)}>
//                                 <i className="fa fa-plus"></i>
//                             </button>
//                             <button
//                                 className="down"
//                                 onClick={(e) => handleDecreaseItemQty(e)}>
//                                 <i className="fa fa-minus"></i>
//                             </button>
//                             <input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder={quantity}
//                                 disabled
//                             />
//                         </div>
//                     </figure>
//                     <a
//                         className="ps-btn ps-btn--black"
//                         href="#"
//                         onClick={(e) => handleAddItemToCart(e)}>
//                         Add to cart
//                     </a>
//                     <div className="ps-product__actions">
//                         <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
//                             <i className="icon-heart"></i>
//                         </a>
//                         <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
//                             <i className="icon-chart-bars"></i>
//                         </a>
//                     </div>
//                 </div>
//                 <a className="ps-btn" href="#" onClick={(e) => handleBuynow(e)}>
//                     Buy Now
//                 </a>
//             </div>
//         );
//     }
// };

// export default connect((state) => state)(ModuleDetailShoppingActions);
