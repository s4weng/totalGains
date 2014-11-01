var WLPApp = angular.module('WLP', ['ionic']);
 
WLPApp.controller('WLPCtrl', function($scope, $ionicTabsDelegate) {
 
  $scope.lifts = [
  {name: 'Snatch', ratio: 0.62, val: 10},
  {name: 'Clean and Jerk', ratio: 0.77, val: 10},
  {name: 'Squat', ratio: 1.0, val: 10},
  {name: 'Pull', ratio: 1.04, val: 10},
  {name: 'Front Squat', ratio: 0.86, val: 10},
  {name: 'Power Snatch', ratio: 0.51, val: 10},
  {name: 'Power Clean', ratio: 0.63, val: 10},
  {name: 'Power Jerk', ratio: 0.73, val: 10}
  ];

  $scope.genGraph = function () {
    var chart = new CanvasJS.Chart("ratioGraph", {

      title:{
        text: "Your Lifts Vs. Optimal Ratio"              
      },
      data: data, //generate data below
    });

    chart.render();
}

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