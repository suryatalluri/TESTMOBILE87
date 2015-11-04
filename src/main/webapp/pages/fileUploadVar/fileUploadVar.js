Application.$controller("fileUploadVarPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action with the variables inside this block(on-page-load) */
    $scope.onPageVariablesReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. $scope.Variables.staticVariable1.getData()
         */
    };

    /* perform any action with widgets inside this block */
    $scope.onPageReady = function() {
        /*
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. $scope.Widgets.byId(), $scope.Widgets.byName()or access widgets by $scope.Widgets.widgetName
         */
    };


    $scope.camera1Success = function($event, $isolateScope) {
        $scope.Variables.uploadIndicator.dataSet.dataValue = 0;
    };


    $scope.uploadFileonSuccess = function(variable, data) {
        $scope.Variables.uploadIndicator.dataSet.dataValue = 1;
    };

    $scope.uploadFileonError = function(variable, data) {
        $scope.Variables.uploadIndicator.dataSet.dataValue = -1;
    };

}]);