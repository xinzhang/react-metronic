import {encode} from '../../utils/crypt';

export async function loginUser(user)
{

  const {userName, password} = user;

  var encodedPassword = encode(password);
  var data = "grant_type=password&username=" + userName + "&password=" + encodedPassword;
  console.log(data);
  
  const request = new Request('/token', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: data
  });

  return (await fetch(request)).json();
}
