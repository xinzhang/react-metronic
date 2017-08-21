import React from 'react';
import PropTypes from 'prop-types';
import ResultTitle from './ResultTitle';

const LastUpdatedTag = ({ lastUpdatedDate }) => {

    return (
        <ResultTitle mainTitle={ 'Last updated:' } subTitle={ lastUpdatedDate }  />
    );
};

LastUpdatedTag.propTypes = {
    mainTitle: PropTypes.string,
    subTitle: PropTypes.string,
};

export default LastUpdatedTag;