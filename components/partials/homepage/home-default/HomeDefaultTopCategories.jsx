import React from 'react';
import Link from 'next/link';
// import Router  from 'React-router'
import { useRouter } from 'next/router';

const HomeDefaultTopCategories = () => {
    const Router = useRouter();
    const push = () => {
        console.log('hello');
        Router.push({
            pathname: '/grocery-category/Beauty',
        });
    };
    return (
        <div className="ps-top-categories">
            <div className="ps-container">
                <h3>Coming Soon...</h3>
                <div className="row">
                    {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/grocery-category/Home-Electronics">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img
                                src="/static/img/categories/1.jpg"
                                alt="dawood-online"
                            />
                            <p>Electronics</p>
                        </div>
                    </div> */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            {/* <Link href="/shop"> */}
                            <a className="ps-block__overlay"></a>
                            {/* </Link> */}
                            <img
                                src="/static/img/categories/2.jpg"
                                alt="dawood-online"
                            />
                            <p>Clothings</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            {/* <Link href="/shop"> */}
                            <a className="ps-block__overlay"></a>
                            {/* </Link> */}
                            <img
                                src="/static/img/categories/3.jpg"
                                alt="dawood-online"
                            />
                            <p>Computers</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/grocery-category/Home-Electronics">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img
                                src="/static/img/categories/4.jpg"
                                alt="dawood-online"
                            />
                            <p>Home & Kitchen</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/grocery-category/Beauty">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img
                                src="/static/img/categories/5.jpg"
                                alt="dawood-online"
                            />
                            <p>Health & Beauty</p>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            {/* <Link href="/shop"> */}
                            <a className="ps-block__overlay"></a>
                            {/* </Link> */}
                            <img
                                // src="/static/img/categories/7.jpg"
                                src="/static/img/categories/6.jpg"
                                alt="dawood-online"
                            />
                            <p>Jewelry & Watch</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category ">
                            <Link href="/grocery-category/Shoes">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img
                                src="https://res.cloudinary.com/xcltech/image/upload/v1656517642/IMG_4242_qpwl9h.jpg"
                                alt="dawood-online"
                            />
                            <p>Shoes & Sandals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultTopCategories;
