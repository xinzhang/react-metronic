import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import { sleep } from '../../utils/sleep';

class CommonApi {      
    static getAssetTypeList = async (obj, preUrl="") => {
        let url = preUrl + "/json/home/orderpad/AssetTypeData.json";

        const response = await fetch(url); 

        await sleep(1000);

        //mock up search on server side                                                        
        return await response.json();
    }

    static getBuySellList = async (obj, preUrl="") => {      
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

export default CommonApi;

