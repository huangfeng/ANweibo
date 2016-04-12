define(['app'],function(app){
	var loginModule = angular.module('loginModule',[]);
	
	app.router({
		moduleName:'login',
		stateName:'login',
		url:'/login',
		templateUrl:'login.html',
		controller:'loginController',
	});

	return loginModule;
})



