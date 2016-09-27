'use strict'

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile) {
        $scope.appendDivToElementMarkup = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element('#appendHere'))
        }
    }
);