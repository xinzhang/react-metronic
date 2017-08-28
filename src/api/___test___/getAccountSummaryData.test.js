import AccountSummaryApi from '../home/accountSummaryApi';

describe('getAccountSummaryData API testing', () => {
    it('expect data', () => {
        let search = {};
        AccountSummaryApi.getAccountSummaryData(search)
            .then(response => {
                expect(response.length).toBe(6);
                expect(response[0].name).toBe("account_1");
                expect(response[0].number).toBe("000001");
                expect(response[0].balance).toBe("123");
            })
    })
})