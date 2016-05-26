angular.module('spBlogger.posts.directives', [])
	.directive('spbComments', function(Post){
		return {
			restrict: 'AEC',
			scope: {
				postInstance:'='
			},
			replace:true,
			link:function(scope, elem, attrs){
			   scope.saveComment=function() {
			    	var postID = scope.postInstance._id;
			    	savedPostInstance = {};
			    	//Give a date to the comment
			       	scope.comment.datePublished = new Date(); 
			       	//copythe post instance in `scope` to a variable `savedPostInstance` 
				  	angular.copy(scope.postInstance,savedPostInstance);
				  	console.log(scope.postInstance);
				  	console.log(savedPostInstance);
				  	//push thecomment to the savedPostInstance  
					savedPostInstance.comments.unshift(scope.comment); 
					//push the comment to the `scope.postInstance` as well
					scope.postInstance.comments.unshift(scope.comment); 
					// clear the comment 
					scope.comment={}; 
					//Now update `savedPostInstance` so that the new comment goes to the server. 
					savedPostInstance.$update();
				}
			},
			templateUrl:'modules/posts/views/comments.html'
		}
	});