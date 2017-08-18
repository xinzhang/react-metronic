
import React from 'react';
import PropTypes from 'prop-types';

const CInputIcon = ({ type='text', name, className, size='16', placeholder, icon='fa fa-lock', onChange, ...props }) => {
    return (
        <div className="input-icon">
            <i className={ icon }></i>
            <input type={ type } name={ Name } className={ `form-control placeholder-no-fix ${ className }` } autoComplete="off" size={ size } placeholder={ placeholder } />
        </div>
    );
};

CInputIcon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email']),
    onChange: PropTypes.func,
};

export default CInputIcon;
 


