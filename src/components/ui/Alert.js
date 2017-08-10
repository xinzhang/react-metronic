import React from 'react';
import PropTypes from 'prop-types';

const componentColor = {
  info: 'bg-blue white',
  warning: 'bg-yellow black',
  success: 'bg-green black',
  error: 'bg-red white',
};

const Alert = ({
                children,
                isVisible,
                status = 'info',
                testid = 'alert-dialog',
                className = '',
                ...props
                }) => {
                    
    const visibleClass = isVisible ? 'block' : 'hide';

    return (
        <div
            data-testid={ testid }
            className={ `${ className } p2 bold ${ visibleClass } ${ componentColor[status] || 'info' }` }
            { ...props }>
            { children }
        </div>
    );
}

Alert.propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
    status: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
    testid: PropTypes.string,
};

export default Alert;