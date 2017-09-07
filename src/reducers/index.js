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
import CommonReducer from './commonReducer';
import OrderPadReducer from './orderPadReducer';

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
    commonState: CommonReducer,
    orderPadState: OrderPadReducer,
});

export default rootReducer;