import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import AccountSummaryReducer from './accountSummaryReducer';
import PortfolioSummaryReducer from './portfolioSummaryReducer';
import userReducer from './userReducer';
import AccountReducer from './accountReducer';

const rootReducer = combineReducers({
    rounting: routerReducer,
    form: formReducer,
    user: userReducer,
    accountSummaryState: AccountSummaryReducer,
    portfolioSummaryState: PortfolioSummaryReducer,
    accountState: AccountReducer,
});

export default rootReducer;