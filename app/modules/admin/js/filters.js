angular.module('spBlogger.admin.filters', [])
	.filter('permalink', function(){
		return function(title){
			return title === undefined ? '' : angular.lowercase(titile).replace(/[\s]/g,'-');
		}
	});