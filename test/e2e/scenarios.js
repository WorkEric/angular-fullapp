'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('The Single Page Blogger E2E Test', function() {
  browser.get('/app/index.html'); //go to http://localhost:8000
  //protractor = protractor.getInstance();
  it('Should have 4 posts', function() {
     var posts = element.all(by.repeater('post in posts'));
     expect(posts.count()).toBe(4); // we have 4 hard coded posts
  });
  it('Should redirect to #/posts/1/sample-title1', function() {
    var posts = element.all(by.repeater('post in posts'));
    posts.first().element(by.tagName('a')).click();
    expect(browser.getCurrentUrl()).toMatch('/posts/1/simple-title1');
  });
}); 
