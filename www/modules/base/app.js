define(function(){
	var app =  angular.module('app',['ionic']);
	app.config(function($stateProvider,$urlRouterProvider,$httpProvider,$ionicConfigProvider){
			//清理缓存
			$ionicConfigProvider.views.maxCache(0);
			//解决跨域问题
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
			$httpProvider.defaults.transformRequest = function(obj){
		        var str = [];
		        for(var p in obj) {
		            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		        }
		        return str.join("&");
		    };
		    $httpProvider.defaults.headers.post = {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    };
			
			console.log(app.states)
			$urlRouterProvider.otherwise('/login');
			for(var i = 0;i<app.states.length;i++){
				(function(i){
					var state = app.states[i];
					state.abstract = state.abstract == null?false:true;
					state.templateUrl = 'modules/'+state.moduleName+'/views/'+state.templateUrl;
					if(state.controller != null){state.controller = 'modules/'+state.moduleName+'/controllers/'+state.controller;}
					$stateProvider
						.state(state.stateName,{
							url:state.url,
							abstract:state.abstract,
							views:{
								'':{
									templateUrl:state.templateUrl,
									controller:function($scope,$rootScope,$state,$http,$stateParams){
										require([state.controller],function(controller){
											controller.apply(this, [$scope,$rootScope,$state,$http,$stateParams]);
											$scope.$apply();
										})
									}
								}
							}
						})
				})(i);
			}
	});
	
	app.states = [];
	//全部的路由
	app.router = function(state){
		app.states.push(state);
	}
	
	
	return app;
})
