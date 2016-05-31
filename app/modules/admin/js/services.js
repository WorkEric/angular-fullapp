angular.module('spBlogger.admin.services', []).factory('Post', ['$resource', 'API_ENDPOINT', function($resource, API_ENDPOINT){
	return $resource(API_ENDPOINT, {id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]).factory('authService', ['AUTH_ENDPOINT', 'LOGOUT_ENDPOINT', '$http', '$cookieStore', function(AUTH_ENDPOINT, LOGOUT_ENDPOINT, $http, $cookieStore){
	var auth = {};
	auth.login = function(username, password){
		return $http.post(AUTH_ENDPOINT, {username: username, password: password}).then(function(response, status){
			auth.user = response.data;
			$cookieStore.put('user', auth.user);
			return auth.user;
		});
	}
	auth.logout = function(){
		return $http.post(LOGOUT_ENDPOINT).then(function(response){
			auth.user = undefined;
			$cookieStore.remove('user');
		});
	}
	return auth;
}]).service('popupService', ['$window', function($window){
	this.showPopup = function(message){
		return $window.confirm(message);
	}
}]).value('API_ENDPOINT', 'http://spblogger-sitepointdemos.rhcloud.com/api/posts/:id')
   .value('AUTH_ENDPOINT', 'http://spblogger-sitepointdemos.rhcloud.com/login')
   .value('LOGOUT_ENDPOINT', 'http://spblogger-sitepointdemos.rhcloud.com/logout');