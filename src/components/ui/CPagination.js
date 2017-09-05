import React from 'react';
import PropTypes from 'prop-types';

const CPagination = ({ currentPage, totalPage, shownPageNum=5, pageNavigation, ...props }) => {
    let pageFrom = (currentPage % shownPageNum === 0) ? (currentPage-1) : (parseInt(currentPage / shownPageNum, 10) * shownPageNum + 1);
    
    let pageTo = Math.min(pageFrom + (shownPageNum-1), totalPage);
    // adjusted the value of pageFrom
    if ((pageTo-pageFrom+1) < shownPageNum) pageFrom = Math.max(pageTo - shownPageNum + 1, 1);

    var pageNumbers = [];
    for (let i=pageFrom; i<=pageTo; ++i) {
        if (currentPage !== i) {
            pageNumbers.push(<li className="page-number" key={ i }><a onClick={ () => pageNavigation(i) }>{ i }</a></li>);
        }
        else {
            pageNumbers.push(<li className="page-number active" key={ i }><span className="currentPage">{ i }</span></li>);
        }
    }

    let prePage = [];
    if (currentPage > 1) {
        prePage.push(<li className="page-first"><a onClick={ () => pageNavigation(1) }>«</a></li>);
        prePage.push(<li className="page-pre"><a onClick={ () => pageNavigation(currentPage - 1) }>‹</a></li>);
    }

    let nextPage = [];
    if (currentPage < totalPage) {
        nextPage.push(<li className="page-next"><a onClick={ () => pageNavigation(currentPage + 1) }>›</a></li>);
        nextPage.push(<li className="page-last"><a onClick={ () => pageNavigation(totalPage) }>»</a></li>);
    }

    return (
        <div className="pull-right pagination" >
            <ul className="pagination">
                { prePage }
                { pageNumbers }
                { nextPage }
            </ul>
        </div>
    );
};

CPagination.propTypes = {
    currentPage: PropTypes.number,
    totalPage: PropTypes.number,
    pageNavigation: PropTypes.func,
};

export default CPagination;

                // <li className="page-first disabled"><a href="/first">«</a></li>
                // <li className="page-pre disabled"><a href="/pre">‹</a></li>
                // <li className="page-number active"><a href="/1">1</a></li>
                // <li className="page-number"><a href="/2">2</a></li>
                // <li className="page-number"><a href="/3">3</a></li>
                // <li className="page-number"><a href="/4">4</a></li>
                // <li className="page-number"><a href="/5">5</a></li>
                // <li className="page-next"><a href="/next">›</a></li>
                // <li className="page-last"><a href="/end">»</a></li>

