'use strict';
const ipcRenderer = require('electron').ipcRenderer;

angular.module('main-app', [])
    .controller('MainCtrl', ['api', function (api) {
        var vm = this;

        vm.endpointUrl = '';
        vm.endpoint = { type: 'notification' };
        vm.notificationEvents = [
            'complaint',
            'delivered',
            'failed',
            'tracking',
            'validation'
        ];
        vm.eventType = '';
        vm.secretKey = '';
        vm.serverId = 1000;
        vm.requests = 1;
        vm.results = [];

        vm.toggleWindow = function () {
            ipcRenderer.send('toggle-results-view', vm.results);
        };

        vm.handlePost = function () {
            let options = {};
            vm.results = [];

            if (vm.requests > 1000) {
                vm.requests = 1000;
            }
            
            if (vm.requests === undefined) {
                vm.requests = 1;
            }
            
            if (vm.endpoint.type === 'notification') {
                
                options = {
                    endpointUrl: vm.endpointUrl,
                    secretKey: vm.secretKey,
                    serverId: vm.serverId,
                    eventType: vm.eventType                
                };
                
                for (let i = 0; i < vm.requests; i++) {
                    api.notification(options).then(function (result) {
                        vm.results.push(result);
                    }, function (error) {
                        vm.results.push(error);
                    });                
                }
            }
            
            else if (vm.endpoint.type === 'inbound') {
                
                options = {
                    endpointUrl: vm.endpointUrl,
                    secretKey: vm.secretKey
                };
                
                for (let i = 0; i < vm.requests; i++) {
                    api.inbound(options).then(function (result) {
                        vm.results.push(result);
                    }, function (error) {
                        vm.results.push(error);
                    });
                }
            }
        }
    }])