import React from 'react';
import CButton from './CButton';

const SearchButton = ({ children }) => {

    return (
        <div>
            <CButton className="green">
                { children }
            </CButton>
        </div>
    );
};
 
export default SearchButton;