//'use strict';

angular.module('spBlogger',['ngCookies', 'ngResource', 'ui.router','spBlogger.posts', 'spBlogger.admin', 'pascalprecht.translate'])
	.run(['$state', '$rootScope', '$translate',
		function($state, $rootScope, $translate){
			$state.go('allPosts');
      $rootScope.languagePreference = {currentLanguage: 'en'};
      $rootScope.languagePreference.switchLanguage = function(key){
        $translate.use(key);
        $rootScope.languagePreference.currentLanguage = key;
      }
		}]
	);

angular.module('spBlogger').config(['$translateProvider', function($translateProvider){
  $translateProvider.translations('en', {
    TITLE: 'Single Page Blogger',
    SUBTITLE: 'One stop blogging solution',
    COMMENTS: 'Comments',
    BY: 'By',
    ADD: 'Add'
  });

  $translateProvider.translations('de', {
    TITLE: 'Single Page Blogger',
    SUBTITLE: 'Die Komplettlösung für Ihr Blog',
    COMMENTS: 'Kommentare',
    BY:'Von',
    ADD:'Hinzufügen'
  });

  $translateProvider.preferredLanguage('en');
}]);

// Declare app level module which depends on filters, and services
/*angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
