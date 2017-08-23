import React from 'react';
import CButton from './CButton';

const SubmitButton = ({ children, ...props }) => {

    return (
        <div>
            <CButton className="green" { ...props }>
                { children }
            </CButton>
        </div>
    );
};
 
export default SubmitButton;