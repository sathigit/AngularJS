app.directive('cnLayout', function() {
    return {
        restrict: 'E',
        templateUrl: 'src/components/layout/layout.html'
    };
});

app.directive('cnBook', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/components/books/book/book.html'
    }
});