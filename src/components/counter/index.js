import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const Counter = ({ counter, increment, decrement }) => {
    return (
        <div className="flex" >
            <Button data-ref="decrementButton" className="bg-black col-2" onClick={ decrement } >
                -
            </Button>

            <div data-ref="result" className="flex-auto center h1">
                { counter }
            </div>
            
            <Button data-ref="incrementButton" className="col-2" onClick={ increment } >
                +
            </Button>
        </div>
    );
};

Counter.propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
};

export default Counter;