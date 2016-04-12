var globalConfig = {
	contextPath:'https://api.weibo.com/',
};

require.config({
	baseUrl:'./',
	paths:{
		app:'modules/base/app',
	},
	
})

define(['require'],function(require){
	var moduleArray = ['login','home']
	for(var i = 0 ;i<moduleArray.length;i++){
		var module = 'modules/'+moduleArray[i]+"/"+moduleArray[i]+"Module";
		moduleArray[i] = module;
	}
	
	require(moduleArray,function(){
		angular.bootstrap(document,['app'])
	})
	
	
})
