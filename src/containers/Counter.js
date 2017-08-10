import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counter';

import Counter from '../components/counter';
import Container from '../components/ui/Container';
import Column from '../components/ui/Column';

function mapStateToProps(state) {
    return {
        counter: state.counter.count,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch(increment()),
        decreaseCounter: () => dispatch(decrement())
    };
}

const Counter = ({ counter, increaseCounter, decreaseCounter }) => {
    return (
        <Container>
            <Column className="col-4" >
                <h1 className="center">Counter</h1>
                <Counter
                    counter={ counter }
                    increment = { increaseCounter }
                    decrement = { decreaseCounter } />
            </Column>
        </Container>
    );
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
