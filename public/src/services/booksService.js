app.service('booksService', ['$http', '$q', function($http, $q) {
    this.getBooks = function () {
        var deferred = $q.defer();
        $http.get("/getBooks").then(function (response) {
            if (response.status === 200) {
                deferred.resolve(response.data);
            }
            return null;
        });
        return deferred.promise;
    }
}]);