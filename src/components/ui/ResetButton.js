import React from 'react';
import CButton from './CButton';

const ResetButton = ({ children, ...props }) => {

    return (
        <div>
            <CButton className="btn-outline grey-salsa" { ...props }>
                { children }
            </CButton>
        </div>
    );
};
 
export default ResetButton;