app.controller('booksController', ['$scope', '$localStorage', '$location'], function($s, $localStorage, $location) {
    $s.$storage = $localStorage;

    $s.$storage.path = $location.path();
});