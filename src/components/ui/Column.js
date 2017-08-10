import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, className = '', style = {} }) => {
    return (
        <div className={ `col ${ className }` } style={{ ...styles.base, ...style }}>
            { children }
        </div>
    );
};

const styles = {
    base: {},
};


Column.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Column;