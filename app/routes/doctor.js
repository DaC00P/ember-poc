import Route from '@ember/routing/route';
// import fetch from 'fetch';

export default class DoctorRoute extends Route {
  model() {
    // if this fetch logic is used, add asyc back to the model declaration
    // your API call logic goes here!
    console.log('The model hook just ran!');
    // let url = `https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?filter[clinicianId]=2`;
    // return fetch(url, {
    //   headers: {
    //     'Content-Type': 'application/vnd.api+json',
    //     'api-version': '2020-01-01',
    //     'application-build-version': '0.0.1',
    //     'application-platform': 'web',
    //     'mode': 'no-cors',
    //   },
    // })
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then((flightResults) => {
    //     console.log(flightResults);
    //   });
    return {
      data: [
        {
          id: '31822614',
          type: 'cptCodes',
          links: {
            self:
              'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/31822614',
          },
          attributes: {
            description: 'Intro Call',
            duration: 15,
            rate: '0.0',
            callToBook: 'false',
          },
        },
      ],
      links: {
        first:
          'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10',
        last:
          'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10',
      },
    };
  }
}
