import React from 'react';

function Pagination({ postsPerPage, totalPosts, paginate, handleNext, handlePrevious, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log('curre',currentPage);
    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item" onClick={handlePrevious}>
                        <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    {pageNumbers.map((number, index) => (
                        <li key={number} 
                            className={currentPage === number ? 'page-item active' : 'page-item'}
                            style={{ cursor: 'pointer' }}
                            onClick={() => paginate(number)}
                        >
                            <a className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
                    <li className="page-item" onClick={handleNext}>
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;

