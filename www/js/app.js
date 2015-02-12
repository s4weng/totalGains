var TGApp = angular.module('TG', ['ionic']);
 
TGApp.controller('TGCtrl', function($scope, $ionicTabsDelegate) {
 
  $scope.lifts = [
  {name: 'Snatch', ratio: 0.62, val: undefined},
  {name: 'Clean and Jerk', ratio: 0.77, val: undefined},
  {name: 'Squat', ratio: 1.0, val: undefined},
  {name: 'Pull', ratio: 1.04, val: undefined},
  {name: 'Front Squat', ratio: 0.86, val: undefined},
  {name: 'Power Snatch', ratio: 0.51, val: undefined},
  {name: 'Power Clean', ratio: 0.63, val: undefined},
  {name: 'Power Jerk', ratio: 0.73, val: undefined}
  ];
  

  $scope.update = function () {
    //Update total
    $scope.total = $scope.lifts[0].val+$scope.lifts[1].val;

    //data for the creation of the graph
    var data=[]; var dataSeries = { type: "column" };
    var dataPoints=[];
    for (var i = 0; i < $scope.lifts.length; i++) {
      if (i == 2) continue;
      dataPoints.push({
        label: $scope.lifts[i].name,
        y: $scope.lifts[i].val
    });
    }
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);

    dataPoints=[];
    dataSeries = { type: "column" };
    for (var i = 0; i < $scope.lifts.length; i++) {
      if (i == 2) continue;
      dataPoints.push({
        label: $scope.lifts[i].name,
        y: $scope.lifts[i].ratio*$scope.lifts[2].val
    });
    }
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);
    var chart = new CanvasJS.Chart("ratioGraph", {

      title:{
        text: "Your Lifts Vs. Optimal Ratio"              
      },
      data: data, //generate data below
    });

    chart.render();
}



});
 


TGApp.config(function($stateProvider, $urlRouterProvider){

$stateProvider
  .state('index', {
     url: '/index',
     abstract:true,
     templateUrl: 'index.html'
  })
  .state('index.home', {
     url: '/home',
     views:{
      'home-tab': {
        templateUrl: 'home.html'
      }
     }
  })
  .state('index.you', {
     url: '/you',
     views:{
      'you-tab': {
        templateUrl: 'you.html'
      }
     }
  })
  .state('index.yourlifts', {
     url: '/yourlifts',
     views:{
      'yourlifts-tab': {
        templateUrl: 'yourlifts.html'
      }
     }
  })
  .state('index.compare', {
     url: '/compare',
     views:{
      'compare-tab': {
        templateUrl: 'compare.html'
      }
     }
  })
.state('index.ratio', {
     url: '/ratio',
     views:{
      'ratio-tab': {
        templateUrl: 'ratio.html'
      }
     }
  })
.state('index.prilepin', {
     url: '/prilepin',
     views:{
      'prilepin-tab': {
        templateUrl: 'prilepin.html'
      }
     }
  });

   $urlRouterProvider.otherwise("/index/home");

});


TGApp.run(function($ionicPlatform) {
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