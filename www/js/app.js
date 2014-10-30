var WLPApp = angular.module('WLP', ['ionic']);

WLPApp.controller('WLPCtrl', function($scope) {

  $scope.lifts = [
  {name: 'Snatch'},
  {name: 'Clean and Jerk'},
  {name: 'Squat'},
  {name: 'Pull'}
  ];

  //$scope.lifts = {};
  
  $scope.update = function(){
  alert($scope.wow);
  };

});

WLPApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
