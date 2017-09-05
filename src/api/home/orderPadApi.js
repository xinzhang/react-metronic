import _ from 'lodash';
import axios from 'axios';
import { sleep } from '../../utils/sleep';


class OrderPadApi {      
    static getAccountList = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/AccountSummaryData.json";

        const response = await fetch(url); 

        await sleep(1000);

        //mock up search on server side                                                        
        return _.map(_.filter(await response.json(), item => ((!_.trim(obj.userId) || item.userId === obj.userId) &&
                                                            (!_.trim(obj.assetType) || item.assetType === obj.assetType))), 
                        item => _.assign({value: item['number'], text: item['name']}));
    }

    static getFundList = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/accountSummary/PortfolioFundData.json";

        const response = await fetch(url); 

        //mock up search on server side
        return _.map(_.filter(await response.json(), item => (!obj || !_.trim(obj.accountNo) || item.accountNo === obj.accountNo)), 
                        item => _.assign({value: item['id'], text: item['name'], dollarValue: item['dollarValue'], apirCode: item['apirCode']}));
    }

    static getFundDetail = async (obj, preUrl="") => {        
        console.log(process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'development')
        {        
            let url = preUrl + "/json/home/orderPad/FundData.json";

            const response = await fetch(url); 

            await sleep(1000);

            //mock up search on server side
            return _.filter(await response.json(), item => ((!_.trim(obj.fundId) || item.fundId === obj.fundId)));
        } else {
            console.log('production');
        }
    }
     
    static getBuySellList = async (obj, preUrl="") => {        
        console.log(process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'development')
        {        
            let url = preUrl + "/json/home/orderPad/BuySellData.json";

            const response = await fetch(url); 

            await sleep(1000);

            //mock up search on server side
            return await response.json();
        } else {
            console.log('production');
        }
    }    
}

export default OrderPadApi;

