import AccountSummaryApi from '../home/accountSummaryApi';
import { PREURL } from '../apiConfig';

describe('accountSummaryApi testing', () => {
    //
    it('expect Account Summary data - all data', () => {
        let search = {};
        AccountSummaryApi.getAccountSummaryData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(6);
                expect(response[0].number).toBe("000001");
                expect(response[0].name).toBe("account_1");
                expect(response[0].balance).toBe("123");
            })
    });
    
    it('expect Account Summary - data filter by assertType', () => {
        let search = {
            assetType: 'term_deposit',
        };
        AccountSummaryApi.getAccountSummaryData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(3);
                expect(response[2].number).toBe("000006");
                expect(response[2].name).toBe("account_6");
                expect(response[2].balance).toBe("999");
            })
    });
    
    it('expect Account Summary - data filter by investorAccount', () => {
        let search = {
            investorAccount: 'account_2',
        };
        AccountSummaryApi.getAccountSummaryData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(1);
                expect(response[0].number).toBe("000002");
                expect(response[0].balance).toBe("100");
            })
    });
    
    it('expect Account Summary - data filter by assertType and investorAccount', () => {
        let search = {
            assetType: 'managed_fund',
            investorAccount: 'account_3',
        };
        AccountSummaryApi.getAccountSummaryData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(1);
                expect(response[0].number).toBe("000003");
                expect(response[0].balance).toBe("200");
            })
    });

    // Account List
    it('expect Account List data - all data', () => {
        let search = {};
        AccountSummaryApi.getAccountList(search, PREURL)
            .then(response => {
                expect(response.length).toBe(6);
                expect(response[1].value).toBe("000002");
                expect(response[1].text).toBe("account_2");
            })
    });
    
    it('expect Account List data - filter by userId', () => {
        let search = {
            userId: '000001',
        };
        AccountSummaryApi.getAccountList(search, PREURL)
            .then(response => {
                expect(response.length).toBe(3);
                expect(response[2].value).toBe("000003");
                expect(response[2].text).toBe("account_3");
            })
    });

    //
    it('expect Portfolio Fund data - all data', () => {
        let search = {};
        AccountSummaryApi.getPortfolioFundData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(7);
                expect(response[1].id).toBe("000002");
                expect(response[1].name).toBe("Fund 2");
            })
    });
    
    it('expect Portfolio Fund data - filter by accoutNo', () => {
        let search = {
            accountNo: '000002',
        };
        AccountSummaryApi.getPortfolioFundData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(2);
                expect(response[0].id).toBe("000003");
                expect(response[0].name).toBe("Fund 3");
            })
    });
    
    //
    it('expect Portfolio Deposit data - all data', () => {
        let search = {};
        AccountSummaryApi.getPortfolioDepositData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(7);
                expect(response[1].id).toBe("000002");
                expect(response[1].name).toBe("TD 2");
            })
    });
    
    it('expect Portfolio Deposit - data filter by accoutNo', () => {
        let search = {
            accountNo: '000002',
        };
        AccountSummaryApi.getPortfolioDepositData(search, PREURL)
            .then(response => {
                expect(response.length).toBe(2);
                expect(response[0].id).toBe("000003");
                expect(response[0].name).toBe("TD 3");
            })
    });
    
    // Transaction History
    // get Fund List
    it('expect Fund List data - all data', () => {
        let search = {};
        AccountSummaryApi.getFundList(search, PREURL)
            .then(response => {
                expect(response.length).toBe(7);
            })
    });
    it('expect Fund List data - filter by accountNo', () => {
        let search = {
            accountNo: '000002',
        };
        AccountSummaryApi.getFundList(search, PREURL)
            .then(response => {
                expect(response.length).toBe(2);
                expect(response[1].value).toBe("000004");
                expect(response[1].text).toBe("Fund 4");
            })
    });
    // get Deposit List
    it('expect Deposit List data - all data', () => {
        let search = {};
        AccountSummaryApi.getDepositList(search, PREURL)
            .then(response => {
                expect(response.length).toBe(7);
            })
    });
    it('expect Deposit List data - filter by accountNo', () => {
        let search = {
            accountNo: '000001',
        };
        AccountSummaryApi.getDepositList(search, PREURL)
            .then(response => {
                expect(response.length).toBe(2);
                expect(response[0].value).toBe("000001");
                expect(response[0].text).toBe("TD 1");
            })
    });
    // get Fund Transaction History
    it('expect Fund Transaction History data - all data', () => {
        let search = {};
        AccountSummaryApi.getFundTransactionHistory(search, PREURL)
            .then(response => {
                expect(response.length).toBe(7);
            })
    });
    it('expect Fund Transaction History data - filter by accountNo', () => {
        let search = {
            accountNo: '000001',
        };
        AccountSummaryApi.getFundTransactionHistory(search, PREURL)
            .then(response => {
                expect(response.length).toBe(3);
                expect(response[1].id).toBe("000002");
                expect(response[1].date).toBe("19/08/2017");
            })
    });
    // get Deposit Transaction History
    it('expect Deposit Transaction History data - all data', () => {
        let search = {};
        AccountSummaryApi.getDepositTransactionHistory(search, PREURL)
            .then(response => {
                expect(response.length).toBe(7);
            })
    });
    it('expect Deposit Transaction History data - filter by accountNo', () => {
        let search = {
            accountNo: '000002',
        };
        AccountSummaryApi.getDepositTransactionHistory(search, PREURL)
            .then(response => {
                expect(response.length).toBe(2);
                expect(response[1].id).toBe("000006");
                expect(response[1].date).toBe("18/08/2017");
            })
    });
});
