import React from 'react';
import style from './style.module.css';
const Pagination = ({ productPerPage, totalProduct, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className={style.customPagination}>
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
