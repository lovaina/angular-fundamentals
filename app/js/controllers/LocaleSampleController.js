'use strict'

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $locale) {
        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
        $scope.otherFormat = $locale.DATETIME_FORMATS.longDate;

        throw {message: 'error message'};
    }
);