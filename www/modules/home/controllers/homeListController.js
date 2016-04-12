define(function(){
	return function($scope,$rootScope,$state,$http){
		
//		$rootScope.configCORS = {
//			'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
//		}
//		
//		$rootScope.access_token = '2.00TjCvYF6LiuOE6671390451tgBS3C';
		
		$scope.count = 10;
		$scope.page = 1;
		$scope.weiboList = [];
		$scope.getMeWeibo = function(){
			$http.get('https://api.weibo.com/2/statuses/friends_timeline.json?access_token='+$rootScope.access_token+'&page='+$scope.page+'&count='+$scope.count,$rootScope.configCORS).success(function(data){
				console.log(data);
				$scope.weiboList = $scope.weiboList.concat(data.statuses);
				console.log($scope.weiboList);
			}).then(function(){
				$scope.page++;
				$scope.$broadcast('scroll.infiniteScrollComplete');
			})
		}
		$scope.getMeWeibo();
		
		$scope.loadMore = function(){
			$scope.getMeWeibo();
		}
		
		
		$scope.listClick = function(item){
			$state.go('home.detail');
		}
		
	}
})
