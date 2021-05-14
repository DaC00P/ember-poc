import Route from '@ember/routing/route';
// import fetch from 'fetch';

export default class BookRoute extends Route {
  async model() {
    console.log('The BOOK hook just ran!');
    return {
      data: [
        {
          id: '8377723',
          type: 'offices',
          links: {
            self:
              'https://johnny-appleseed.clientsecure.me/client-portal-api/offices/8377723',
          },
          attributes: {
            name: 'Video Office',
            phone: '(626) 298-1956',
            isVideo: true,
            geolocation: {
              lat: '0.0',
              lng: '0.0',
            },
            isPublic: false,
          },
        },
      ],
    };
  }
}
