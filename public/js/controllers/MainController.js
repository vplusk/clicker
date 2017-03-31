(function() {

    'use strict';

    angular
        .module('clickerApp')
        .controller('MainController', MainController);

    MainController.$inject = [
        '$scope'
    ];

    function MainController($scope) {
        $scope.ddSwitch = false;
    };
})();