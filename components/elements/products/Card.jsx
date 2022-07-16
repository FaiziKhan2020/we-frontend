import Link from 'next/link';
import React from 'react';

const Card = ({ img, title, onclick }) => {
    return (
        <div className="text-center">
            <div class="card ml-4">
                <img
                    class="card-img-top"
                    src={img}
                    alt="Card image cap"
                    height={140}
                />
                <div class="card-body">
                    <a>
                        <button
                            style={{
                                fontSize: '12px',
                                padding: '5px 20px',
                                border: 'none',
                                color: 'white',
                                backgroundColor: '#de0000',
                            }}
                            className="btn btn-primary fs-20"
                            onClick={onclick}>
                            {title}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
