import React from 'react';
//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Support from './Support';
import SiteMap from './SiteMap';
import Logout from './Logout';

/*
import { loginUser, logoutUser } from '../actions/session';
 
function mapStateToProps(state) {
    return {
        session: state.session,
        router: state.router,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(loginUser()),
        logout: () => dispatch(logoutUser()),
    };
}
*/

const Main = ({ children, session, login, logout }) => {
    //const token = session.token;
    //const isLoggedIn = token && token !== null && typeof token !== 'undefined';
    //const firstName = (isLoggedIn && session.profile !== null && typeof session.profile !== 'undefined') ? session.profile.firstName : "";
    //const lastName = (isLoggedIn && session.profile !== null && typeof session.profile !== 'undefined') ? session.profile.lastName : "";

    return (
        <main>            
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/home' component={ Home } />
                <Route path='/support' component={ Support } />
                <Route path='/sitemap' component={ SiteMap } />
                <Route path='/logout' component={ Logout } />
                <Redirect to='/' />
            </Switch>
        </main>
    );
};

/*
Main.propTypes = {
    children: PropTypes.node,
    session: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
*/

export default Main;

/*
<LoginModal 
    onSubmit={ login }
    isPending={ session.isLoading }
    hasError={ session.hasError } 
    isVisible={ !isLoggedIn } />

<div className="flex flex-auto" />
<NavigatorItem isVisible={ isLoggedIn } mr >
    <div data-testid="user-profile" className="h3">{ `${ firstName } ${ lastName }` } </div>
</NavigatorItem>
<NavigatorItem isVisible={ isLoggedIn } >
    <Button onClick={ logout } className="bg-red white">Logout</Button>
</NavigatorItem>    
*/