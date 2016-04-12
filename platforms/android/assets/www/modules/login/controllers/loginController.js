define(function(){
	return function($scope,$rootScope,$state,$http){
		$(document).ready(function(){
		    $('.slider').slider({full_width: true,interval:10000000,height:$(window).height()});
		});
		
		
		$rootScope.configCORS = {
			'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
		}
		
		$rootScope.access_token = '';
		
		$scope.loginClick = function(){
			    YCWeibo.ssoLogin(function(args){
			     $rootScope.access_token = args.access_token;
			     $state.go('home.list');
			   });
		}

		$scope.cancelClick = function(){
			YCWeibo.logout(function(){
		      alert('注销成功');
		   });
		}
		
		
		
		/**PC端口获取access_token------------------------------------------*/
		$scope.codeParam = {
			client_id:'3884916243',
			redirect_uri:'https://api.weibo.com/oauth2/default.html',
		}
		
		$scope.tokenParam = {
			client_id : '3884916243',
			client_secret : '2d5fb05484df4b82557349a628fe282c',
			grant_type : 'authorization_code',
			code : '0b71b098be73d179f256b512beb46c21',
			redirect_uri : 'https://api.weibo.com/oauth2/default.html',
		}
		
//		$http.get('https://api.weibo.com/oauth2/authorize?client_id=3884916243&redirect_uri=http://www.baidu.com',$scope.CORSconfig).success(function(response){
//			console.log(response);
//		})	

//		$http.post('https://api.weibo.com/oauth2/access_token',$scope.tokenParam,$scope.CORSconfig).success(function(data){
//			console.log(data);
//		})

//		$scope.loginClick = function(){
//		     $state.go('home.list');
//		}
		//end-----------------------------------------------------------------------/
		
		
		
	}
})
