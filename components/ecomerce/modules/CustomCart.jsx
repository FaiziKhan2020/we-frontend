import React from 'react';
import { useCart } from 'react-use-cart';
const CustomCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    console.log(items);
    if (isEmpty) return <h3 className="text-center">Your Cart Is Empty</h3>;
    // const result = items.map((item, index) => {
    //     <tr key={index}>
    //         <td>
    //             <img src={item.url} alt="product" />
    //         </td>
    //         <td>Rs. {item.price} </td>
    //         <td>Rs. {item.title} </td>
    //     </tr>;
    // });
    // console.log(items.price);
    return (
        <>
            <table
                className="table  ps-table--shopping-cart ps-table--responsive"
                style={{ marginTop: '-50px' }}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tr className="text-center">
                    Cart: ({totalUniqueItems}) Total Items:({totalItems}){' '}
                </tr>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img
                                    height={150}
                                    src={item.imgUrl || item.url}
                                    alt="product img"
                                    style={{ width: '150px' }}
                                />
                            </td>
                            {/* {console.log(item.price, item.title, item.imgUrl)} */}
                            <td data-label="price" className="price">
                                Rs. {item.price}
                            </td>
                            <td data-label="quantity">
                                <div className="form-group--number">
                                    <button
                                        className="up"
                                        onClick={(e) =>
                                            updateItemQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }>
                                        +
                                    </button>
                                    <button
                                        className="down"
                                        onClick={(e) =>
                                            updateItemQuantity(
                                                item.id,
                                                item.quantity - 1
                                            )
                                        }>
                                        -
                                    </button>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder={item.quantity}
                                        disabled={true}
                                    />
                                </div>
                            </td>
                            <td data-label="total">
                                <strong>
                                    Rs.{' '}
                                    {(item.price * item.quantity).toFixed(2)}
                                </strong>
                            </td>
                            <td>
                                <a onClick={(e) => removeItem(item.id)}>
                                    <i className="icon-cross"></i>
                                </a>
                            </td>
                        </tr>
                        // <tr key={item.id}>
                        //     <td>
                        //         <img
                        //             src={item.url}
                        //             alt="asd"
                        //             style={{ width: '150px' }}
                        //         />
                        //     </td>
                        //     <td data-label="price" className="price ml-4">
                        //         Rs. {item.price}
                        //     </td>
                        // </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CustomCart;
