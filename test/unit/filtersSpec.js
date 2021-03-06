'use strict';

describe('filter', function(){
	beforeEach(module('spBlogger.admin.filters'));
	describe('Permalink Filter Test\n', function(){
		it('Should replace', function(permalinkFilter){
			expect(permalinkFilter('I had 3 spaces')).toEqual('i-had-3-spaces');
		})
	})
})

/* jasmine specs for filters go here */
/*
describe('filter', function() {
  beforeEach(module('myApp.filters'));


  describe('interpolate', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
*/