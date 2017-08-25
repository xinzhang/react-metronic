import React from 'react';
import PropTypes from 'prop-types';

const CPagination = ({ className, onClick, ...props }) => {
    return (
        <div className="pull-right pagination" >
            <ul className="pagination">
                <li className="page-first disabled"><a href="/first">«</a></li>
                <li className="page-pre disabled"><a href="/pre">‹</a></li>
                <li className="page-number active"><a href="/1">1</a></li>
                <li className="page-number"><a href="/2">2</a></li>
                <li className="page-number"><a href="/3">3</a></li>
                <li className="page-number"><a href="/4">4</a></li>
                <li className="page-number"><a href="/5">5</a></li>
                <li className="page-next"><a href="/next">›</a></li>
                <li className="page-last"><a href="/end">»</a></li>
            </ul>
        </div>
    );
};

CPagination.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default CPagination;
 


