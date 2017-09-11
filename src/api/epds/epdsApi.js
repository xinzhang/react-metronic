
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
        const request = new Request(url, {
              method: 'GET',
              headers: new Headers({
                'Content-Type': 'application/octet-stream',
                'accept': 'application/octet-stream'
              })
        });
        return (await fetch(request)).blob();
    }

}

export default epdsApi
