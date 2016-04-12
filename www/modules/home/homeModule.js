define(['app'],function(app){
	var homeModule = angular.module('homeModule',[]);
	
	app.router({
		moduleName:'home',
		stateName:'home',
		url:'/home',
		abstract: true,
		templateUrl:'home.html',
		controller:'homeController',
	});
	
	app.router({
		moduleName:'home',
		stateName:'home.list',
		url:'/list',
		templateUrl:'homeList.html',
		controller:'homeListController',
	});
	
	app.router({
		moduleName:'home',
		stateName:'home.detail',
		url:'/list/detail',
		templateUrl:'listDetail.html',
		controller:'listDetailController',
	});

	return homeModule
})
