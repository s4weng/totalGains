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

  $scope.ratios = $scope.lifts;
  $scope.ratios.splice(2, 1);

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
        { label: "Snatch", y:19 },
        { label: "Clean and Jerk", y:25},
        { label: "Squat", y:30},
        { label: "Pull", y:33},
        { label: "Front Squat", y:33},
        { label: "Power Snatch", y:33},
        { label: "Power Clean", y:33},
        { label: "Power Jerk", y:33}
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