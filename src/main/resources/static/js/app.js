var app = angular.module('ReportBuilder', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider, $httpProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
        .dark()
    $httpProvider.defaults.withCredentials = true;
    $routeProvider
        .when('/reportBuilder', {
           controller: 'reportBuilderCtrl as reportBuilder',
           templateUrl: 'reportBuilder.html'
        })
        .otherwise({
           redirectTo: '/reportBuilder'
        })
});