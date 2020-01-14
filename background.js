chrome.webNavigation.onCompleted.addListener(function(details) {
  chrome.tabs.executeScript(details.tabId, {
    file: 'pizza.js'
  });
}, {
  url: [{
    hostContains: '.mercedes-benz.com'
  }],
});
