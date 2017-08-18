import React from 'react';
import CButton from './CButton';

const PrintButton = ({ children }) => {

    return (
        <div>
            <CButton className="green">
                { children }
            </CButton>
        </div>
    );
};
 
export default PrintButton;