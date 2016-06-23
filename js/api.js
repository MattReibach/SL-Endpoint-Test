'use strict';

angular.module('main-app')
.service('api', ['$http', '$httpParamSerializer', 'notificationFactory', Api])

function Api($http, $httpParamSerializer, notificationFactory) {

    return {
        notification,
        inbound
    };
    
    function notification(options) {
        let params;
        switch (options.eventType) {
            case 'complaint':
                params = notificationFactory.complaint(options.serverId, options.secretKey);
                break;
            case 'delivered':
                params = notificationFactory.delivered(options.serverId, options.secretKey);
                break;
            case 'failed':
                params = notificationFactory.failed(options.serverId, options.secretKey);
                break;
            case 'tracking':
                params = notificationFactory.tracking(options.serverId, options.secretKey);
                break;
            case 'validation':
            default:
                params = notificationFactory.validation(options.serverId, options.secretKey);
                break;
        }

        return $http({
            method: 'post',
            url: options.endpointUrl,
            data: $httpParamSerializer(params),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }

    function inbound(options) {
        const params = notificationFactory.inbound(options.secretKey);

        return $http({
            method: 'post',
            url: options.endpointUrl,
            data: params
        })
    }
}