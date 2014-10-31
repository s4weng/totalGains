var WLPApp = angular.module('WLP', ['ionic']);
 
WLPApp.controller('WLPCtrl', function($scope, $ionicTabsDelegate) {
 
  $scope.lifts = [
  {name: 'Snatch'},
  {name: 'Clean and Jerk'},
  {name: 'Squat'},
  {name: 'Pull'},
  {name: 'Front Squat'},
  {name: 'Power Snatch'},
  {name: 'Power Clean'},
  {name: 'Power Jerk'}
  ];

$scope.ratios = [
  {name: 'Snatch'},
  {name: 'Clean and Jerk'},
  {name: 'Pull'},
  {name: 'Front Squat'},
  {name: 'Power Snatch'},
  {name: 'Power Clean'},
  {name: 'Power Jerk'}
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
        { label: "Snatch", y: $scope.lifts["Snatch"]},
        { label: "Clean and Jerk", y: $scope.lifts["Clean and Jerk"]},
        { label: "Squat", y: $scope.lifts["Squat"]},
        { label: "Pull", y: $scope.lifts["Pull"]},
        { label: "Front Squat",  y: $scope.lifts["Front Squat"]},
        { label: "Power Snatch", y: $scope.lifts["Power Snatch"]},
        { label: "Power Clean", y: $scope.lifts["Power Clean"]},
        { label: "Power Jerk", y: $scope.lifts["Power Jerk"]}
        ]
       },
       {
        name: "Optimal lifts",
        dataPoints: [
        { label: "Snatch", y: $scope.lifts["Squat"]*$scope.ratios["Snatch"]},
        { label: "Clean and Jerk", $scope.lifts["Squat"]*$scope.ratios["Clean and Jerk"]},
        { label: "Pull", y: $scope.lifts["Squat"]*$scope.ratios["Pull"]},
        { label: "Front Squat", y: $scope.lifts["Squat"]*$scope.ratios["Front Squat"]},
        { label: "Power Snatch", y: $scope.lifts["Squat"]*$scope.ratios["Power Snatch"]},
        { label: "Power Clean", y: $scope.lifts["Squat"]*$scope.ratios["Power Clean"]},
        { label: "Power Jerk", y: $scope.lifts["Squat"]*$scope.ratios["Power Jerk"]}
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