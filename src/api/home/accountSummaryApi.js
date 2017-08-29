import fetch from 'isomorphic-fetch';
import _ from 'lodash';
//import { PREURL } from '../apiConfig';

function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

class AccountSummaryApi {        
    static getAccountSummaryData = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/AccountSummaryData.json";

        const response = await fetch(url); 

        await sleep(1000);

        return _.filter(await response.json(), item => ((!_.trim(obj.assetType) || item.assetType === obj.assetType) && 
                                                        (!_.trim(obj.investorAccount) || item.name === obj.investorAccount)));
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
