import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavigatorItem = ({
                        children,
                        isVisible = true,
                        mr = false,
                        ml = false,
                        ...props
                        }) => {
    const navItemClasses = classNames('truncate', {
        hide: !isVisible,
        mr2: mr,
        ml2: ml,
    });

    return (
        <div data-testid={ props.testid } className={ navItemClasses }>
            { children }
        </div>
    );
}

NavigatorItem.propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
    mr: PropTypes.bool,
    ml: PropTypes.bool,
    testid: PropTypes.string,
};

export default NavigatorItem;