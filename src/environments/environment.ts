// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiURLE: 'http://localhost:8183/main/',
  //DEV
  apiURLiBanking: 'http://localhost:8186/',


  RedirectLogin: 'https://testebanking.stbbt.mk/Default.aspx',

  limitForRender: 30000,
  maxAmountForConversionInBuySell:5000,//
  maxAccountPP1450: 2500,
  version: "1.5.0",
  // apiURLiBanking: "http://192.168.1.160:8016/iBankingBackEnd-0.0.1/",
  // apiURLiBanking: "http://192.168.1.160:8016/iBankingBackEnd-0.0.1/",
  //TEST
  // apiURLiBanking: "/ibank/"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
