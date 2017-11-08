var routerModule = angular.module('routerModule', [
	'appConfig',
	'ngRoute',
    'homeModule'
]);

routerModule.config(['configProvider', '$routeProvider', '$locationProvider', 
	function(configProvider, $routeProvider, $locationProvider) {
		$routeProvider
            .when(configProvider.context, {
				templateUrl:    configProvider.resourcesPath + 'site/pages/home/home.html',
                controller:     'homeController'
			})
            .otherwise({
				redirectTo: configProvider.context
			});
            
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
	}
]);