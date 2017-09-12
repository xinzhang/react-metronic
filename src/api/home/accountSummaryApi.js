import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import axios from 'axios';
//import { PREURL } from '../apiConfig';
import {getAuthData, injectBearer} from '../../utils/authUtil';
import { sleep } from '../../utils/sleep';

class AccountSummaryApi {
    // Account Summary
    static getAccountSummaryData = async (obj, preUrl="") => {
        if (process.env.REACT_APP_PROVIDER === 'json')
        {
            let url = preUrl + "/json/home/accountSummary/AccountSummaryData.json";

            const response = await fetch(url);

            await sleep(1000);

            //mock up search on server side
            return _.filter(await response.json(), item => ((!_.trim(obj.assetType) || item.assetType === obj.assetType) &&
                                                            (!_.trim(obj.investorAccount) || item.name === obj.investorAccount)));
        } else {
            let url = "/api/accountSummary";
            let access_token = getAuthData().access_token;
            console.log('access_token', access_token);

            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                }
            };

            const response = await axios.get("/api/accountSummary", config);

            //mock up search on server side
            return _.filter(response.data, item => ((!_.trim(obj.assetType) || item.assetType === obj.assetType) &&
                                                            (!_.trim(obj.investorAccount) || item.name === obj.investorAccount)));
        }
    }

    // Portfolio Summary
    static getAccountList = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/AccountSummaryData.json";

        const response = await fetch(url);

        await sleep(1000);

        //mock up search on server side
        return _.map(_.filter(await response.json(), item => ((!_.trim(obj.userId) || item.userId === obj.userId) &&
                                                            (!_.trim(obj.assetType) || item.assetType === obj.assetType))),
                        item => _.assign({value: item.number, text: item.name, type:item.assetType}));
    }

    static getPortfolioFundData = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/PortfolioFundData.json";

        const response = await fetch(url);

        await sleep(1000);

        //mock up search on server side
        return _.filter(await response.json(), item => (!obj || !_.trim(obj.accountNo) || item.accountNo === obj.accountNo) );
    }

    static getPortfolioDepositData = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/PortfolioDepositData.json";

        const response = await fetch(url);

        await sleep(1000);

        //mock up search on server side
        return _.filter(await response.json(), item => (!obj || !_.trim(obj.accountNo) || item.accountNo === obj.accountNo) );
    }

    // Transaction History
    static getFundList = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/PortfolioFundData.json";

        const response = await fetch(url);

        //mock up search on server side
        return _.map(_.filter(await response.json(), item => (!obj || !_.trim(obj.accountNo) || item.accountNo === obj.accountNo)),
                        item => _.assign({value: item['id'], text: item['name'], dollarValue: item['dollarValue']}));
    }

    static getDepositList = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/PortfolioDepositData.json";

        const response = await fetch(url);

        //mock up search on server side
        return _.map(_.filter(await response.json(), item => (!obj || !_.trim(obj.accountNo) || item.accountNo === obj.accountNo)),
                        item => _.assign({value: item['id'], text: item['name'], dollarValue: item['maturityValue']}));
    }

    static getFundTransactionHistory = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/FundTransactionHistory.json";

        const response = await fetch(url);

        await sleep(1000);

        //mock up search on server side
        return _.filter(await response.json(), item => (!obj || !_.trim(obj.accountNo) || item.accountNo === obj.accountNo) );
    }

    static getDepositTransactionHistory = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/DepositTransactionHistory.json";

        const response = await fetch(url);

        await sleep(1000);

        //mock up search on server side
        return _.filter(await response.json(), item => (!obj || !_.trim(obj.accountNo) || item.accountNo === obj.accountNo) );
    }
}

export default AccountSummaryApi;

/*
function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}
console.log('a');
await sleep(6000);
console.log('b');
*/
