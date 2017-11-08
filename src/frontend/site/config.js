var appConfig = angular.module('appConfig', [])
.provider('config', function() {
	
	var config = this;
	
	config.context = '/' + window.location.pathname.split('/')[1];
	config.resourcesPath = config.context + '/resources/';
	config.api = config.context + '/api/';
	config.geonames = 'http://api.geonames.org/';
	
	this.$get = function() {
		return config;
	};
});