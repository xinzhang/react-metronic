import AccountSummaryApi from '../home/accountSummaryApi';
import { PREURL } from '../apiConfig';

describe('getAccountSummaryData API testing', () => {
    it('expect data - all data', () => {
        let search = {};
        AccountSummaryApi.getAccountSummaryData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(6);
                expect(response[0].number).toBe("000001");
                expect(response[0].name).toBe("account_1");
                expect(response[0].balance).toBe("123");
            })
    });
    
    it('expect data - data filter by assertType', () => {
        let search = {
            assetType: 'term_deposit',
        };
        AccountSummaryApi.getAccountSummaryData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(3);
                expect(response[2].number).toBe("000006");
                expect(response[2].name).toBe("account_3");
                expect(response[2].balance).toBe("999");
            })
    });
    
    it('expect data - data filter by investorAccount', () => {
        let search = {
            investorAccount: 'account_2',
        };
        AccountSummaryApi.getAccountSummaryData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(3);
                expect(response[1].number).toBe("000003");
                expect(response[1].balance).toBe("200");
            })
    });
    
    it('expect data - data filter by assertType and investorAccount', () => {
        let search = {
            assetType: 'managed_fund',
            investorAccount: 'account_2',
        };
        AccountSummaryApi.getAccountSummaryData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(1);
                expect(response[0].number).toBe("000003");
                expect(response[0].balance).toBe("200");
            })
    });
})