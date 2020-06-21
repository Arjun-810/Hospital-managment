var myApp = angular.module("myApp4", ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('patient-rgister', {
        url: '/first',
        templateUrl:'registration/patient_reg.html',
        controller :'firstController'
    })
    
    .state('root', {
        url: '/',
        templateUrl: "/doctor/doctor-home.html"
    })
    $urlRouterProvider.otherwise('/');

});
