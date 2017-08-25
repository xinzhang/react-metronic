import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SubmitButton from  '../../../components/ui/SubmitButton';
import ResultConclusion from  '../../../components/ui/ResultConclusion';
import CInput from  '../../../components/ui/CInput';
import CTable from  '../../../components/ui/CTable';
import ResultTitle from  '../../../components/ResultTitle';

import { printAccountSummary } from '../../../actions/accountSummaryAction';
import { AccountSummaryResultHeader } from './AccountSummaryData';

const mapStateToProps = (state) => {
    return {
        AccountSummaryResultHeader: AccountSummaryResultHeader,
        searchResult: state.accountSummaryState.searchResult
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPrintClick: () => {
            dispatch(printAccountSummary())  
        }, 
    }
};

class AccountSummaryResult extends Component {  
    constructor(props, context) {
        super(props, context);

        let totalBalance = _.sumBy(this.props.searchResult, (o) => Number(o.balance));
        // set state
        this.state = {
            filterStr: '',
            totalBalance,
            currentlyDisplayed: this.props.searchResult,
        };

        // bindings
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let totalBalance = _.sumBy(nextProps.searchResult, (o) => Number(o.balance));

        this.setState({
            totalBalance,
            currentlyDisplayed: nextProps.searchResult,
        });
    }    

    onFilterChange = (e) => {
        let filterStr = e.target.value;

        let newlyDisplayed = _.filter(this.props.searchResult, 
                                            summary => summary.name.includes(filterStr.toLowerCase()) || 
                                                       summary.number.includes(filterStr.toLowerCase()) ||
                                                       summary.balance.includes(filterStr.toLowerCase()));
        
        let totalBalance = _.sumBy(newlyDisplayed, (o) => Number(o.balance));

        this.setState({
            filterStr,
            totalBalance,
            currentlyDisplayed: newlyDisplayed,
        });                                                   
    };

    render() {
        const { AccountSummaryResultHeader, onPrintClick } = this.props;

        return (
            <div className="c-search-result-container portlet light bordered">
                <div className="c-search-result-titlebar">
                <div className="c-search-result-title"><ResultTitle mainTitle="Account Summary" subTitle="Select an Account Number to view the individual Accounts" /></div>
                <div className="c-search-result-buttons">
                    <div className="c-search-result-toolbar"><CInput className="form-control" type="text" size="30" placeholder="Filter" value={ this.state.filterStr } onChange={ this.onFilterChange } /> </div>
                    <SubmitButton onClick={ onPrintClick }><i className='fa fa-print' title="Print this report" /></SubmitButton>
                </div>
                </div>
                <div className="c-search-result-body portlet-body">
                    <CTable headers={ AccountSummaryResultHeader } data={ this.state.currentlyDisplayed } checkBox={ false }  />
                    <div className="c-search-result-footer">
                        <ResultConclusion >Total Balance ($): { this.state.totalBalance }</ResultConclusion>
                    </div>
                </div>
            </div>
        );
    };
};
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountSummaryResult);