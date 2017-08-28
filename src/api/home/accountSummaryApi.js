import fetch from 'isomorphic-fetch';
import { PREURL } from '../apiConfig';

class AccountSummaryApi {        
    static getAccountSummaryData = async (obj) => {
        let url = PREURL + "/json/home/accountSummary/AccountSummaryData.json";

        console.log("search obj: " + JSON.stringify(obj));

        const response = await fetch(url);
        return await response.json();

        // return fetch(url)
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(JSON.stringify(json));
        //         return json;
        //     })
        //     .catch(error => {
        //         console.log("The error inside getAccountSummaryData: " + error);
        //         throw error;
        //     });
    }
}

export default AccountSummaryApi;


