const app = angular.module('app', ['ngRoute', 'ngStorage'])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $routeProvider
            .when("/home", {
                templateUrl: "src/components/home/home.html" //,
                    // controller : "londonCtrl"
            })
            .when("/books", {
                templateUrl: "src/components/books/books.html",
                controller: "booksController"
            })
            .when("/programs", {
                templateUrl: "src/components/programs/programs.html" //,
                    // controller : "londonCtrl"
            })
            .when("/questions", {
                templateUrl: "src/components/questions/questions.html" //,
                    // controller : "parisCtrl"
            });
    })
    .controller('homeController', ['$scope', '$localStorage', '$location', function($s, $localStorage, $location) {
        $s.$storage = $localStorage.$default({
            page: '/questions'
        });

        $location.path($s.$storage.page);

    }]);