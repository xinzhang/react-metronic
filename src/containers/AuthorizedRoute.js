import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthorizedRoute extends React.Component {
    componentWillMount() {
    }

    render() {
      console.log(this.props);
      const { component: Component, user, ...rest } = this.props;

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
