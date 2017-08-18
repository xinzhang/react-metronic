import React from 'react';
import PropTypes from 'prop-types';

const ResultTitle = ({ mainTitle, subTitle }) => {

    return (
        <div>
            <h3>{ mainTitle }</h3>
            <p>{ subTitle }</p>
        </div>
    );
};

ResultTitle.propTypes = {
    mainTitle: PropTypes.string,
    subTitle: PropTypes.string,
};

export default ResultTitle;