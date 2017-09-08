
class epdsApi {

    async searchEPDS(filterString, siteUrl = "")
    {
        const url  = siteUrl + '/ePDSApi?query=' + filterString;
        console.log(url);
        return (await fetch(url)).json();
    }

    async getEPDSDoc(docCode, siteUrl = "")
    {
        const url = siteUrl + "/ePDS?APIRCode=" + docCode;
        console.log(url);
        return (await fetch(url)).json();
    }

}

export default epdsApi