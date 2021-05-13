import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class OfficesRoute extends Route {
  async model() {
    // your API call logic goes here!
    console.log('The model hook just ran!');
    let url = ``;
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((flightResults) => {
        console.log(flightResults);
      });

    // return [{ name: 'dentist' }, { name: 'doctor' }];
  }
}
