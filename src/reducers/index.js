import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import AccountSummaryReducer from './accountSummaryReducer';
import PortfolioSummaryReducer from './portfolioSummaryReducer';
import TransactionHistoryReducer from './transactionHistoryReducer';
import userReducer from './userReducer';
import AccountReducer from './accountReducer';
import FundReducer from './fundReducer';
import DepositReducer from './depositReducer';

const rootReducer = combineReducers({
    rounting: routerReducer,
    form: formReducer,
    user: userReducer,
    accountSummaryState: AccountSummaryReducer,
    portfolioSummaryState: PortfolioSummaryReducer,
    transactionHistoryState: TransactionHistoryReducer,
    accountState: AccountReducer,
    fundState: FundReducer,
    depositState: DepositReducer,
});

export default rootReducer;