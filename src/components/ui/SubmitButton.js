import React from 'react';
import CButton from './CButton';

const SubmitButton = ({ children }) => {

    return (
        <div>
            <CButton className="green">
                { children }
            </CButton>
        </div>
    );
};
 
export default SubmitButton;