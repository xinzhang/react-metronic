import fetch from 'isomorphic-fetch';

export function getABCdata() {
    return fetch('http://localhost:3000/test/abc.json').then(response => {
        return response.json();
    }).catch(error => {
      throw error;
    });
}
