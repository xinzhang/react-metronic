import React from 'react';
import { connect } from 'react-redux';

import Container from '../components/ui/Container';
import Column from '../components/ui/Column';

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

const About = () => {
    return (
        <Container>
            <Column className="col-12">
                <h1>About Us</h1>
                <p>
                    Rangle.io is a next-generation HTML5 design and development firm
                    dedicated to modern, responsive web and mobile applications.
                </p>
            </Column>
        </Container>
    ); 
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);

