import {encode} from '../../utils/crypt';

export async function loginUser(user)
{
  const url = "http://localhost:48726";

  const {userid, password} = user;

  var encodedPassword = encode(password);
  var data = "grant_type=password&username=" + userid + "&password=" + encodedPassword;

  const request = new Request(url + '/token', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: data
  });

  return (await fetch(request)).json();
}
