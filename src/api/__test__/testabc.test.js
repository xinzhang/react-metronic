import {getABCdata} from '../testabc';

describe('api', function() {
  it("expect data", function () {
    //const response = await getAllProducts();
    //console.log(response);
    getABCdata().then(response => {
      console.log(response); //< this is never printed
      expect(response.length).toBe(2); //< always pass / gets ignored?
      expect(response[0].name).toBe("john"); //< always pass / gets ignored?
    });
  })
})
