import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import { sleep } from '../../utils/sleep';
import { creditCardformat } from '../../utils/StringService';

class OrderPadApi {
  static getOrderFundList = async (preUrl="") => {
      const app_provider = process.env.REACT_APP_PROVIDER || 'json';
      if (app_provider === 'json')  
      {
          let url = preUrl + "/json/home/orderPad/fund.json";

          const response = await fetch(url);

          await sleep(1000);

          //mock up search on server side
          return (await response.json());
      } else {
          console.log('production');
      }
  }

    static getFundDetailsList = async (obj, preUrl="") => {
        const app_provider = process.env.REACT_APP_PROVIDER || 'json';
        if (app_provider === 'json')    
        {
            let url = preUrl + "/json/home/orderPad/FundDetails.json";

            const response = await fetch(url);

            await sleep(1000);

            //mock up search on server side
            return _.filter(await response.json(), item => ((!_.trim(obj.fundId) || item.fundId === obj.fundId)));
        } else {
            console.log('production');
        }
    }

    static getPaymentDetailsList = async (obj, preUrl="") => {
        const app_provider = process.env.REACT_APP_PROVIDER || 'json';
        if (app_provider === 'json')    
        {
            let url = preUrl + "/json/home/orderPad/PaymentDetails.json";

            const response = await fetch(url);

            await sleep(1000);
            console.log("obj.accountNo:", obj.accountNo);
            //mock up search on server side
            return _.map(_.filter(await response.json(), item => ((!_.trim(obj.userId) || item.userId === obj.userId) &&
                                                                (!_.trim(obj.accountNo) || item.accountNo === obj.accountNo))),
                        item => _.assign({value: item['paymentId'], text: `${creditCardformat(item['cardNo'])} ( ${item['expiredDate']} )`}));

        } else {
            console.log('production');
        }
    }
}

export default OrderPadApi;
