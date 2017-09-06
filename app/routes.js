angular.module('app', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
    .when("/home", {
        templateUrl : "components/home/home.html"//,
        // controller : "londonCtrl"
    })
    .when("/books", {
        templateUrl : "components/books/books.html"//,
        // controller : "parisCtrl"
    })
    .when("/programs", {
        templateUrl : "components/programs/programs.html"//,
        // controller : "londonCtrl"
    })
    .when("/questions", {
        templateUrl : "components/questions/questions.html"//,
        // controller : "parisCtrl"
    });
});