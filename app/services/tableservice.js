(function () {
  'use strict';

  angular
    .module('app')
    .factory('TableService', TableService);

  function TableService() {
    let salary = 52000;

    let service = {
      // getFinancialResults: getFinancialResults,
      // getFinancialSum: getFinancialSum,
      // getSampleEmployees: getSampleEmployees
    };

    return service;
}
})();