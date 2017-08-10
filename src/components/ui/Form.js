import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, handleSubmit }) => {
    return (
        <form
            onSubmit={(e) => {
            e.preventDefault();
            if (document.activeElement) {
                document.activeElement.blur();
            }
            handleSubmit();
            }}>
            { children }
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.node,
    handleSubmit: PropTypes.func,
};

export default Form;