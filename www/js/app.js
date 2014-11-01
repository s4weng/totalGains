var WLPApp = angular.module('WLP', ['ionic']);
 
WLPApp.controller('WLPCtrl', function($scope, $ionicTabsDelegate) {
 
  $scope.lifts = [
  {name: 'Snatch', ratio: 0.62, val: 0},
  {name: 'Clean and Jerk', ratio: 0.77, val: 0},
  {name: 'Squat', ratio: 1.0, val: 0},
  {name: 'Pull', ratio: 1.04, val: 0},
  {name: 'Front Squat', ratio: 0.86, val:0},
  {name: 'Power Snatch', ratio: 0.51, val:0},
  {name: 'Power Clean', ratio: 0.63, val:0},
  {name: 'Power Jerk', ratio: 0.73, val:0}
  ];

  $scope.genGraph = function () {
    var chart = new CanvasJS.Chart("ratioGraph", {

      title:{
        text: "Your Lifts Vs. Optimal Ratio"              
      },
      data: [             
        {
          type: "column",
         name: "User's lifts",
         dataPoints: [
        { label: "Snatch", y: $scope.lifts[0].val},
        { label: "Clean and Jerk", y: $scope.lifts[1].val},
        { label: "Squat", y: $scope.lifts[2].val},
        { label: "Pull", y: $scope.lifts[3].val},
        { label: "Front Squat",  y: $scope.lifts[4].val},
        { label: "Power Snatch", y: $scope.lifts[5].val},
        { label: "Power Clean", y: $scope.lifts[6].val},
        { label: "Power Jerk", y: $scope.lifts[7].val}
        ]
       },
       {
        name: "Optimal lifts",
        dataPoints: [
        { label: "Snatch", y: $scope.lifts[0].ratio*$scope.lifts[2].val},
        { label: "Clean and Jerk", y: $scope.lifts[1].ratio*$scope.lifts[2].val},
        { label: "Squat", y: $scope.lifts[2].ratio*$scope.lifts[2].val},
        { label: "Pull", y: $scope.lifts[3].ratio*$scope.lifts[2].val},
        { label: "Front Squat",  y: $scope.lifts[4].ratio*$scope.lifts[2].val},
        { label: "Power Snatch", y: $scope.lifts[5].ratio*$scope.lifts[2].val},
        { label: "Power Clean", y: $scope.lifts[6].ratio*$scope.lifts[2].val},
        { label: "Power Jerk", y: $scope.lifts[7].ratio*$scope.lifts[2].val}
        ]
       }
       ]
     });

    chart.render(); 
}
  

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