import React from 'react';
import PropTypes from 'prop-types';
import './ResultTitle.css';

const ResultTitle = ({ mainTitle, subTitle }) => {

    return (
        <div className="c-result-title-container">
            <span className='c-main-title'>{ mainTitle }</span>
            <span className='c-sub-title'>{ subTitle }</span>
        </div>
    );
};

ResultTitle.propTypes = {
    mainTitle: PropTypes.string,
    subTitle: PropTypes.string,
};

export default ResultTitle;