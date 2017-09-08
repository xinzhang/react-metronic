import epdsApi from '../epds/epdsApi';
import { PREURL } from '../apiConfig';

describe('epds api testing', () => {
    //
    it('expect epds search result', () => {
        let search = "FSF";
        const api = new epdsApi();
        api.searchEPDS(search, "http://172.20.100.201/api/")
            .then(response => {
                expect(response.length).toBe(6);
                expect(response[0].number).toBe("000001");
                expect(response[0].name).toBe("account_1");
                expect(response[0].balance).toBe("123");
            })
    });
    
    it('expect epds document return', () => {
        let code = "FSF0003AU";
        const api = new epdsApi();        
        api.getEPDSDoc(code, "http://172.20.100.201/")
            .then(response => {                
                expect(response.length).toBe(3);
                expect(response[2].number).toBe("000006");
                expect(response[2].name).toBe("account_6");
                expect(response[2].balance).toBe("999");
            })
    });

});
