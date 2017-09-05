import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthorizedRoute extends React.Component {
    componentWillMount() {
    }

    render() {
      // console.log('AuthorizedRoute: ', JSON.stringify(this.props));
      const { component: Component, user, ...rest } = this.props;

      // console.log('component in AuthorizedRoute: ', this.props.Component);
      return (
          <Route {...rest} render={props => {
            //if (user.) return <div>Loading...</div>          
            return (user && user.userName && user.userName !== '')
                ? <Component {...props} />
                : <Redirect to="/auth/login" />
            }} />
      );
    }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(
    mapStateToProps,
)(AuthorizedRoute);
