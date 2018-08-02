// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'futureCorps',
  number: 9016099989,
  email: {
    domain: 'thefuturecorps.com',
    business: 'contact',
    support: 'support',
    admin: 'admin',
    recruit: 'join',
  },
  links: {
    gofundme: 'https://www.gofundme.com/support-futurecorps',
    facebook: 'https://www.facebook.com/TheFCorps',
    twitter: 'https://www.twitter.com/TheFCorps',
    youtube: 'https://www.youtube.com/channel/UCy_UsC-J31J4W3XfznDVBrQ'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
