define(function(){
	return function($scope,$rootScope,$state){
		
		$scope.headClick = function(){
			Materialize.showStaggeredList('#staggered')
		}
		
		$scope.againLoginClick = function(){
			$state.go('login');
		}
		
		
		
	}
})
