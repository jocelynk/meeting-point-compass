describe('Testing MapCtrl', function() {

  beforeEach(angular.mock.module('starter.controllers'))

  var MapCtrl,
    scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    MapCtrl = $controller('MapCtrl', {
      $scope: scope
    });
  }));

  it('testing Map Controller', function () {
    console.log("testing Map Controller");
  });

});
