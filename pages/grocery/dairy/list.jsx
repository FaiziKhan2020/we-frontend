import React from 'react';
import Data from '~/public/static/data/demo';
import { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
import Router from 'next/router';
function list() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    `https://dawoodddocker.herokuapp.com/api/v1/product/id/84`
                );
                setData(data.data.data);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();
    }, []);

    const send = (e) => {
        Router.push({
            pathname: '/grocery/dairy/filter',
            query: {
                e,
            },
        });
    };
    return (
        // <div class="card-group mx-auto ">
        <div class="dropdown show">
            <a
                style={{ fontSize: '20px', backgroundColor: '#de0000' }}
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Filters
            </a>
            <div className="mb-4 ">
                <div
                    class="dropdown-menu"
                    // key={index}
                    aria-labelledby="dropdownMenuLink">
                    {Data.Dairy.map((item, index) => (
                        <a
                            style={{ fontSize: '15px' }}
                            class="dropdown-item"
                            onClick={() => send(item.send)}>
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
        // </div>
    );
}

export default list;
