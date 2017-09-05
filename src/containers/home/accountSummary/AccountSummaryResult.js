import React, { Component } from 'react';
import { connect } from 'react-redux';
import _, {debounce} from 'lodash';

import SubmitButton from  '../../../components/ui/SubmitButton';
import ResultConclusion from  '../../../components/ui/ResultConclusion';
import CInput from  '../../../components/ui/CInput';
import CTable from  '../../../components/ui/CTable';
import CSpinner from  '../../../components/ui/CSpinner';
import ResultTitle from  '../../../components/ResultTitle';

import { printAccountSummary } from '../../../actions/accountSummaryAction';
import { AccountSummaryResultHeader } from './AccountSummaryResultHeader';

const mapStateToProps = (state) => {
    return {
        AccountSummaryResultHeader: AccountSummaryResultHeader,
        searchResult: state.accountSummaryState.searchResult,
        isPending: state.accountSummaryState.isPending,
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
            currentlyDisplayed: _.map(this.props.searchResult, element => _.extend({}, element, {paramValue: element.number})),
        };
    }

    componentWillReceiveProps(nextProps) {
        let totalBalance = _.sumBy(nextProps.searchResult, (o) => Number(o.balance));

        this.setState({
            totalBalance,
            currentlyDisplayed: _.map(nextProps.searchResult, element => _.extend({}, element, {paramValue: element.number})),
        });
    }

    handleSearch = (event)=> {
      this.setState({filterStr: event.target.value}, () => {
        this.doSearch();
      })
    }

    doSearch = debounce( () => {
      let filterStr = this.state.filterStr;

      let currentlyDisplayed = _.map(_.filter(this.props.searchResult,
                                          summary => summary.name.includes(filterStr.toLowerCase()) ||
                                                     summary.number.includes(filterStr.toLowerCase()) ||
                                                     summary.balance.includes(filterStr.toLowerCase())), 
                                                element => _.extend({}, element, {paramValue: element.number}));


      let totalBalance = _.sumBy(currentlyDisplayed, (o) => Number(o.balance));

      this.setState({
          totalBalance,
          currentlyDisplayed: currentlyDisplayed,
      });
    }, 300);

    render() {
        const { AccountSummaryResultHeader, isPending, onPrintClick } = this.props;

        return (
            <div className="c-search-result-container portlet light bordered">
                <div className="c-search-result-titlebar">
                    <div className="c-search-result-title"><ResultTitle mainTitle="Account Summary" subTitle="Select an Account Number to view the individual Accounts" /></div>
                    <div className="c-search-result-buttons">
                        <div className="c-search-result-toolbar"><CInput className="form-control" type="text" size="30" placeholder="Filter" value={ this.state.filterStr } onChange={ this.handleSearch } /> </div>
                        <SubmitButton onClick={ onPrintClick }><i className='fa fa-print' title="Print this report" /></SubmitButton>
                    </div>
                </div>
                <div className="c-search-result-body portlet-body">
                    <CTable headers={ AccountSummaryResultHeader } data={ this.state.currentlyDisplayed } checkBox={ false }  />
                    <div className="c-search-result-footer">
                        <ResultConclusion >Total Balance ($): { this.state.totalBalance }</ResultConclusion>
                    </div>
                </div>
                <CSpinner isPending={ isPending } />
            </div>
        );
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountSummaryResult);
