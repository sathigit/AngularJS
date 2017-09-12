app.controller('booksController', ['$scope', '$localStorage', '$location', 'booksService', function ($scope, $localStorage, $location, booksService) {
  booksService.getBooks().then(function (booksList) {
        $scope.books = booksList;
    });
}]);
