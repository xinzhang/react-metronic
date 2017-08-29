import React from 'react';
import PropTypes from 'prop-types';

const CSpinner = ({ isPending=false, className="" }) => {
    const spinnerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        width: '100%',
        height: '100%',
        background: "rgba(0,0,0,.5) url('/assets/images/spinner.gif') no-repeat 50% 50%",
        display: isPending ? 'block' : 'none',
    };

    return (
        <div className={ `${ className }` } style={ spinnerStyle }></div>
    );
};

CSpinner.propTypes = {
    isPending: PropTypes.bool,
    className: PropTypes.string,
};

export default CSpinner;

//<div className={ `${ className } ${ showOrHide }` } ><img src={ spinner } style={{ width:'50%',position:'absolute','z-index':999,top:'0px',left:'0px' }} /></div>