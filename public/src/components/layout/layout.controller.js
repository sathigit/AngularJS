angular.module('app').controller('layout', ['$scope', function ($scope) {
    $scope.page = '';
    $scope.data="vaibhav";

    $scope.init = function () {
        setActiveClass();
    };

    $scope.changeNavigationHighlight = function (event) {
        $('.nav li').removeClass('active');
        $(event.target).parent().addClass('active');
    };

    // contoller funtions
    function setActiveClass () {
        var pathname = window.location.pathname;
        $('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');
    }
}]);