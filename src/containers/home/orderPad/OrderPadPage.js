import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Values } from 'redux-form-website-template';
import CTable from  '../../../components/ui/CTable';
import OrderPadForm from './OrderPadForm';

import { addOrder, getOrderFundList, getFundDetailsList, getPaymentDetailsList } from '../../../actions/orderPadAction';
import { getAccountList } from '../../../actions/accountSummaryAction';
import { getAssetTypeList, getBuySellList } from '../../../actions/commonAction';
import { OrderPadHeader } from './OrderPadHeader';

import './OrderPadPage.css';


const mapStateToProps = (state) => {
    const empty = {value:'', text:'Please Select One ...'};
    return {
        OrderPadHeader,
        assetTypeList: [empty, ...state.commonState.assetTypeList],
        accountList: [empty, ...state.accountState.accountList],
        buySellList: [empty, ...state.commonState.buySellList],
        orderFundList: [empty, ...state.fundState.orderFundList],
        fundDetailsList: state.fundState.fundDetailsList,
        paymentDetailsList: [empty, ...state.accountState.paymentDetailsList],
        isPending: state.commonState.isPending ||
                    state.accountState.isPending ||
                    state.fundState.isPending,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
        getAssetTypeList: (obj) => {
            dispatch(getAssetTypeList(obj));
        },
        getAccountList: (obj) => {
            dispatch(getAccountList(obj));
        },
        getBuySellList: (obj) => {
            dispatch(getBuySellList(obj));
        },
        getOrderFundList: () => {
            dispatch(getOrderFundList());
        },
        getFundDetailsList: (obj) => {
            dispatch(getFundDetailsList(obj));
        },
        getPaymentDetailsList: (obj) => {
            dispatch(getPaymentDetailsList(obj));
        },
        onSubmitClick: (obj) => {
            dispatch(addOrder(obj));
        },
  }
};

class OrderPadPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFundId: "",
            currentlyOrderPadDisplayed: [],
        };

        // call the actions to load the data
        this.props.getAssetTypeList({});
        this.props.getAccountList({});
        this.props.getBuySellList({});
        this.props.getOrderFundList();
        this.props.getFundDetailsList({});
        this.props.getPaymentDetailsList({});

        // this. = this..bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isPending === false) {
            let selectedFundId = this.state.selectedFundId || (nextProps.fundList && nextProps.fundList[0] && nextProps.fundList[0].value);

            this.updatedOrderPadStateOnPage({
                selectedFundId,
                fundDetailsList: nextProps.fundDetailsList,
            });

        }
    }

    onFundChange(event) {
        let selectedFundId = event.target.value;

        this.updatedFundStateOnPage({
            selectedFundId,
            fundTransactionHistory: this.props.fundTransactionHistory,
        });
    }

    updatedOrderPadStateOnPage(obj) {
        this.setState({
            currentlyOrderPadDisplayed: _.filter(obj.fundDetailsList, item => item.fundId === obj.selectedFundId),
        });
    }

    render() {
        return (
            <div className="c-order-pad-container">
                <OrderPadForm { ...this.props } />
                <CTable headers={ OrderPadHeader } data={ this.state.currentlyOrderPadDisplayed }  checkBox={ false } />
                <Values form="OrderPadForm" />
            </div>
        );
    }
}

OrderPadPage.propTypes = {
    OrderPadHeader: PropTypes.array,
    assetTypeList: PropTypes.array,
    accountList: PropTypes.array,
    buySellList: PropTypes.array,
    fundOrderList: PropTypes.array,
    fundDetailsList: PropTypes.array,
    paymentDetailsList: PropTypes.array,
    isPending: PropTypes.bool,
};

OrderPadPage.defaultProps = {
    assetTypeList: [],
    accountList: [],
    buySellList: [],
    fundOrderList: [],
    fundDetailsList: [],
    paymentDetailsList: [],
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderPadPage);
