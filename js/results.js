const ipcRenderer = require('electron').ipcRenderer;

angular.module('results-app', [])
    .controller('ResultsCtrl', ['$rootScope', function ($rootScope) {
        var vm = this;
        ipcRenderer.send('get-results-data')
        ipcRenderer.on('results-data', function (event, results) {
            $rootScope.$apply(function () {
                vm.results = results;
            });
        })
    }])