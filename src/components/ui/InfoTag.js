import React from 'react';
import PropTypes from 'prop-types';
import './InfoTag.css';

const InfoTag = ({ title, name, text, ...props }) => {

    return (
        <div className="c-info-tag-container">
            <div className="c-info-tag-title">{ title }</div>
            <div className="c-info-tag-name">{ name }</div>
            <div className="c-info-tag-text">{ text }</div>
        </div>
    );
};

InfoTag.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
};

export default InfoTag;