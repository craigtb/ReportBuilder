var app = angular.module('ReportBuilder', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
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