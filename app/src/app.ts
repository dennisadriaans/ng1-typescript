import angular = require('angular');
import uirouter = require('angular-ui-router');

const app = angular.module('app', [uirouter]);

app.config(($interpolateProvider) => {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

app.config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true);
}]);

app.config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            component: 'main'
        })
});

app.component('main', {
    template: 'sdfsdfsdf',
    export() {
        console.log(123);
    }
});
