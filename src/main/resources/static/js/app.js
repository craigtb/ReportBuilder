var app = angular.module('ReportBuilder', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $routeProvider
        .when('/reportBuilder', {
           controller: 'reportBuilderCtrl as reportBuilder',
           templateUrl: 'reportBuilder.html'
        })
        .when('/reportViewer', {
            controller: 'reportViewerCtrl as reportViewer',
            templateUrl: 'reportViewer.html'
        })
        .otherwise({
           redirectTo: '/reportBuilder'
        })
});