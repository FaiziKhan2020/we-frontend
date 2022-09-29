import React from 'react';
import Link from 'next/link';
const Pagination = ({ productPerPage, totalProduct, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a
                            onClick={() => paginate(number)}
                            className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
