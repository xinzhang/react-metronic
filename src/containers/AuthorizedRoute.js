import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { getLoggedUser } from '../utils/xhr';

class AuthorizedRoute extends React.Component {

    componentWillMount() {
        //getLoggedUser();

    }

    render() {
      console.log(this.props);
      const { component: Component, user, ...rest } = this.props

    return (
        <Route {...rest} render={props => {
        //if (user.) return <div>Loading...</div>
        console.log('auth route:', user);
        return (user && user.userName && user.userName !== '')
            ? <Component {...props} />
            : <Redirect to="/auth/login" />
        }} />
    )
    }
};

// const stateToProps = ({ state }) => {
//   console.log(state);
//   return {user: state.user};
// };

function stateToProps(state, ownProps) {
  console.log('authorised route mapStateToProps:',state);
  return {
    user: state.user
  }
}

export default connect(stateToProps)(AuthorizedRoute);
