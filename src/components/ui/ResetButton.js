import React from 'react';
import CButton from './CButton';

const ResetButton = ({ children }) => {

    return (
        <div>
            <CButton className="btn-outline grey-salsa">
                { children }
            </CButton>
        </div>
    );
};
 
export default ResetButton;