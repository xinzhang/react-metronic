import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Container({ children, size = 1, center, ...props }) {
    const containerClasses = classNames(
                                'clearfix', 
                                'px1', 
                                {
                                    'max-width-1': size === 1,
                                    'max-width-2': size === 2,
                                    'max-width-3': size === 3,
                                    'max-width-4': size === 4,
                                    'mx-auto': center,
                                });

    return (
        <div data-testid={ props.testid } className={ containerClasses }>
            { children }
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf([1, 2, 3, 4]),
    center: PropTypes.bool,
    testid: PropTypes.string,
};

export default Container;